import React, { Component } from 'react'
import { Divider, ListItemSecondaryAction, ListItem, ListItemText, Switch, IconButton, Icon, Button, LinearProgress, TextField, Input, InputAdornment, FormControl, Radio, InputLabel, FormLabel, FormControlLabel, RadioGroup, Dialog, Toolbar, AppBar, List, ListItemIcon, Grid, ButtonGroup, Select, MenuItem } from '@material-ui/core';

export default class FullfillmentTime extends Component {
  constructor(props) {
    super(props);
    this.fullFillmentTimeUnit = { value: 'Min' }
    this.state = {
      form: {
        fullFillmentTime: {
          message: '',
          isError: false
        }
      }
    }
  }
  submitForm = () => {
    const fullFillmentTime = this.fullFillmentTimeInput.value;
    const fullFillmentTimeUnit = this.fullFillmentTimeUnit.value;
    let tempState = this.state.form;
    if (!fullFillmentTime.length) {
      tempState.fullFillmentTime.message = 'Required';
      tempState.fullFillmentTime.isError = true;
    } else if (fullFillmentTime <= 0) {
      tempState.fullFillmentTime.message = 'Invalid Input';
      tempState.fullFillmentTime.isError = true;
    } else {
      let fullfillmentLeadTime = Number(fullFillmentTime);
      if(this.props.storeId){
        let payload = { storeId: this.props.storeId, fullfillmentLeadTime }
        console.log(payload)
        this.props.updateStoreBasicDetails(payload);
        this.props.closeDialog();
      }
      tempState.fullFillmentTime.message = '';
      tempState.fullFillmentTime.isError = false;
    }
    this.setState({ form: tempState });
  }
  render() {
    let objVal = { fullFillmentTime: '', fullFillmentTimeUnit: 'Min' };
    let key = 'fulfill'
    if (this.props.fieldVal) {
      key = 'fulfill_edit'
      objVal = this.props.fieldVal;
    }
    console.log(this.state.form)
    return (
      <>
        <div className="store-setting">
          <div className="setting-details">
            <p>Fullfilemnt time is</p>
            <p>Some text here Some text here Some text here Some text here Some text here ome text here Some text here</p>
          </div>
          <div className="fullfilment-time">
            <p>Fullfillment time</p>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField fullWidth
                  type="number"
                  key={`${key}_0`}

                  inputRef={ref => this.fullFillmentTimeInput = ref}
                  inputProps={{
                    defaultValue: objVal.fullFillmentTime
                  }}
                  error={this.state.form.fullFillmentTime.isError}
                  helperText={this.state.form.fullFillmentTime.message}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <Select
                    key={`${key}_1`}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    inputProps={{
                      defaultValue: this.fullFillmentTimeUnit.value
                    }}
                    onChange={(e) => this.fullFillmentTimeUnit = { value: e.target.value }}
                  >
                    <MenuItem value={'Min'}>Mins</MenuItem>
                    <MenuItem value={'Hr'}>Hour</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </div>
          <div className="text-center pb-5">
            <Button variant="outlined" color="primary" onClick={() => this.submitForm()}>
              Submit
              </Button>
          </div>
        </div>
      </>
    )
  }
}
