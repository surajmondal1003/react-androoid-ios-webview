import React, { Component } from 'react'
import { Divider, ListItemSecondaryAction, ListItem, ListItemText, Switch, IconButton, Icon, Button, LinearProgress, TextField, Input, InputAdornment, FormControl, Radio, InputLabel, FormLabel, FormControlLabel, RadioGroup, Dialog, Toolbar, AppBar, List, ListItemIcon, Grid, ButtonGroup, Select, MenuItem } from '@material-ui/core';
import { KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { getOnlyHourMin } from '../../utils/miscellaneous/storeOpenCalculate';

export default class StoreOperation extends Component {
  constructor(props) {
    super(props);
    this.dateObj = {}
  }
  onSwitchChange = (e, dayObj) => {
    dayObj.isOpen = e.target.checked ? 1 : 0;
    dayObj.isError = false;
    this.dateObj[e.target.name] = dayObj;
    console.log(this.dateObj);

  }
  onTimeChange = (value, dayName, timeType, isError) => {
    if (this.dateObj[dayName]) {
      this.dateObj[dayName][timeType] = value;
      this.dateObj[dayName].isError = isError;
      console.log('dayname', this.dateObj[dayName]);
    }
    console.log(this.dateObj);
  }
  setEndDate = (date) => {
    let dt = new Date().setHours(date.getHours() + 12, 0, 0, 0);
    return new Date(dt).getTime();
  }
  onSubmit = () => {
    console.log(this.dateObj)
    const obj = Object.assign({}, this.dateObj);
    let isError = false;
    Object.keys(obj).map(x => {
      if (!isError) {
        isError = obj[x].isError;
      }
    })
    if (!isError) {
      let arr = Object.values(obj).map(x => {
        delete x.isError;
        x.openTime = new Date(x.openTime).getTime();
        x.closeTime = new Date(x.closeTime).getTime();
        return x;
      })
      const payload = { storeid: this.props.storeId, storeOperation: arr };
      console.log('payload', payload)
      this.props.submitStoreOperation(payload)
      this.props.closeDialog()
    }
  }
  render() {

    let objVal = [
      {
        "dayName": "MONDAY",
        "openTime": new Date().getTime(),
        "closeTime": this.setEndDate(new Date()),
        "isOpen": 1
      },
      {
        "dayName": "TUESDAY",
        "openTime": new Date().getTime(),
        "closeTime": this.setEndDate(new Date()),
        "isOpen": 1
      },
      {
        "dayName": "WEDNESDAY",
        "openTime": new Date().getTime(),
        "closeTime": this.setEndDate(new Date()),
        "isOpen": 1
      },
      {
        "dayName": "THURSDAY",
        "openTime": new Date().getTime(),
        "closeTime": this.setEndDate(new Date()),
        "isOpen": 1
      },
      {
        "dayName": "FRIDAY",
        "openTime": new Date().getTime(),
        "closeTime": this.setEndDate(new Date()),
        "isOpen": 1
      },
      {
        "dayName": "SATURDAY",
        "openTime": new Date().getTime(),
        "closeTime": this.setEndDate(new Date()),
        "isOpen": 1
      },
      {
        "dayName": "SUNDAY",
        "openTime": new Date().getTime(),
        "closeTime": this.setEndDate(new Date()),
        "isOpen": 1
      },
    ]
    if (this.props.fieldVal) {
      objVal = this.props.fieldVal;
    }
    let key = 'storeOperation'
    return (
      <div className="store-setting">
        <div className="setting-details">
          <p>Store Operation is</p>
          <p>Some text here Some text here Some text here Some text here Some text here ome text here Some text here</p>
        </div>
        <div className="store-profile-list day-onoff">
          <List>
            {
              objVal.map((day, index) => {
                if (!this.dateObj[day.dayName]) {
                  day.openTime = new Date(Number(day.openTime));
                  day.closeTime = new Date(Number(day.closeTime));
                  this.dateObj[day.dayName] = day;
                }
                return (
                  <>
                    <ListItem key={`${key}_${index}`}>
                      <ListItemText primary={day.dayName} secondary={
                        <>
                          <FormControlLabel
                            key={`${key}_${index}`}
                            control={
                              <Switch
                                name={day.dayName}
                                color="primary"
                                defaultChecked={this.dateObj[day.dayName].isOpen ? true : false}
                                // inputProps={{ defaultValue: this.dateObj[day.dayName].isOpen?true:false}}
                                defaultValue={true}
                                onChange={(e) => this.onSwitchChange(e, day)}
                              />
                            }
                            label="Open"
                          />
                        </>
                      } />
                      <ListItemSecondaryAction>
                        <OpenCloseTimePicker day={day} onTimeChange={this.onTimeChange} />
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                  </>
                )
              })
            }
          </List>
        </div>
        <div className="text-center pb-5">
          <Button variant="outlined" color="primary" onClick={() => this.onSubmit()}>
            Submit
              </Button>
        </div>
      </div>
    )
  }
}
export function OpenCloseTimePicker(props) {

  const [openTime, setOpenTime] = React.useState(new Date(Number(props.day.openTime)));
  const [closeTime, setCloseTime] = React.useState(new Date(Number(props.day.closeTime)));
  const [openTimeStringVal, setOpenTimeStringVal] = React.useState(getOnlyHourMin(props.day.openTime));
  const [closeTimeStringVal, setCloseTimeStringVal] = React.useState(getOnlyHourMin(props.day.closeTime));
  const [error, setError] = React.useState(false);
  // React.useEffect(() => {
  //   setOpenTime(props.openTime)
  // }, [props.day.openTime])
  // React.useEffect(() => {
  //   setCloseTime(props.closeTime)
  // }, [props.day.closeTime])
  const timeChange = (value, stringTimeVal, timeType) => {
    let isError = false;
    let currTiemVal = Date.parse('01/01/2011 ' + stringTimeVal);
    if (timeType == 'openTime') {
      let closeTimeVal = Date.parse('01/01/2011 ' + closeTimeStringVal)
      if (currTiemVal == closeTimeVal)
        isError = true;
      setOpenTime(value);
      setOpenTimeStringVal(getOnlyHourMin(value));
    } else if (timeType == 'closeTime') {
      let openTimeVal = Date.parse('01/01/2011 ' + openTimeStringVal)
      if (currTiemVal == openTimeVal)
        isError = true;
      setCloseTime(value);
      setCloseTimeStringVal(getOnlyHourMin(value));
    }
    setError(isError);
    props.onTimeChange(value, props.day.dayName, timeType, isError)
  }
  console.log('dateObj', new Date(openTime), new Date(closeTime), props.day.openTime, props.day.closeTime)
  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <KeyboardTimePicker
              fullWidth
              margin="normal"
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
              value={openTime}
              onChange={(x, y) => timeChange(x, y, 'openTime')}
            />
          </Grid>
          <Grid item xs={6}>
            <KeyboardTimePicker
              fullWidth
              margin="normal"
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
              value={closeTime}
              onChange={(x, y) => timeChange(x.getTime(), y, 'closeTime')}
            />
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
      {error && <p>Open and close time cannot be same</p>}
    </>
  )
}
