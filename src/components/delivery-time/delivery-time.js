import React, { Component } from 'react'
import { Divider, ListItemSecondaryAction, ListItem, ListItemText, Switch, IconButton, Icon, Button, LinearProgress, TextField, Input, InputAdornment, FormControl, Radio, InputLabel, FormLabel, FormControlLabel, RadioGroup, Dialog, Toolbar, AppBar, List, ListItemIcon, Grid, ButtonGroup, Select, MenuItem } from '@material-ui/core';

export default class DeliveryTime extends Component {
  constructor(props) {
    super(props);
    this.storePickup = false;
    this.orderProcessingTimeUnit = { value: 'Min' };
    this.deliveryRadiusUnit = { value: 'km' };
    this.freeDeliveryRadiusUnit = { value: 'km' }
    this.deliveryChargeUnit = { value: 'km' }
    this.state = {
      form: {
        deliveryRadius: {
          error: {
            isError: false,
            message: ''
          },
          checkParams: ['required', 'zeroCheck'],
          zeroCheck: { message: 'Delivery Range cannot be 0', check: true }
        },
        freeDeliveryRadius: {
          error: {
            isError: false,
            message: ''
          },
          checkParams: ['required'],
          zeroCheck: { message: 'Delivery Range cannot be 0', check: true }
        },
        storePickup: {
          errror: {
            isError: false,
            message: ''
          }
          // checkParams: ['required']

        },
        homeDelivery: {
          error: {
            isError: false,
            message: ''
          }
          // checkParams: ['required']
        },
        deliveryCharge: {
          error: {
            isError: false,
            message: ''
          },
          checkParams: ['required']
        },
        orderProcessingTime: {
          error: {
            isError: false,
            message: ''
          },
          checkParams: ['required'],
          zeroCheck: { message: 'Order Time cannot be 0', check: true }
        },
      },

      homeDelivery: false,

    }
  }
  componentDidMount() {
    if (this.props.fieldVal) {
      if (this.props.fieldVal.home_delivery) {
        if (!this.state.homeDelivery) {
          this.setState({ homeDelivery: true });
        }
      }
    }
  }
  onSwitchChange = (event) => {
    if (event.target.name == 'storePickup') {
      this.storePickup = event.target.checked
    } else {
      console.log(event.target.checked, event.target.name)
      this.setState({
        [event.target.name]: event.target.checked
      })
    }
  }
  preventKeyCodes = (e) => {
    let keyCodes = [109, 189, 187, 107, 190];
    console.log(e.keyCode, keyCodes)
    if (keyCodes.includes(e.keyCode))
      e.preventDefault();
  }
  onSubmit = () => {
    const homeDelivery = this.state.homeDelivery;
    const storePickup = this.storePickup ? 'YES' : 'NO';
    const orderProcessingTime = this.orderProcessingTimeInput.value;
    const orderProcessingTimeUnit = this.orderProcessingTimeUnit.value;
    let deliveryRadius = '';
    let freeDeliveryRadius = ''
    let deliveryCharge = '';
    const deliveryRadiusUnit = this.deliveryRadiusUnit.value;
    const freeDeliveryRadiusUnit = this.freeDeliveryRadiusUnit.value
    const deliveryChargeUnit = this.deliveryChargeUnit.value;
    let isError = false;
    const tempState = this.state.form;
    const checkObj = {
      orderProcessingTime
    }
    if (homeDelivery) {
      deliveryRadius = this.deliveryRadiusInput.value;
      freeDeliveryRadius = this.freeDeliveryRadiusInput.value;
      deliveryCharge = this.deliveryChargeInput.value;
      checkObj['deliveryRadius'] = deliveryRadius;
      checkObj['freeDeliveryRadius'] = freeDeliveryRadius;
      checkObj['deliveryCharge'] = deliveryCharge;
    }
    Object.keys(checkObj).forEach(x => {
      const objVal = checkObj[x] ? checkObj[x].toString() : '';
      const xformObj = tempState[x];
      let objHasError = false
      xformObj.checkParams.forEach(param => {
        if (!objHasError) {
          xformObj.error.message = '';
          xformObj.error.isError = false
          switch (param) {
            case 'required':
              if (!objVal.length) {
                isError = true;
                objHasError = true;
                xformObj.error.message = 'Required Field';
                xformObj.error.isError = true
              }
              break;
            case 'regexValidation':
              const regex = new RegExp(xformObj.validation)
              if (!regex.test(objVal)) {
                isError = true;
                objHasError = true;
                xformObj.error.message = 'Invalid input';
                xformObj.error.isError = true
              }
              break;
            case 'zeroCheck':
              if (objVal == 0) {
                isError = true;
                objHasError = true;
                xformObj.error.message = xformObj.zeroCheck.message;
                xformObj.error.isError = true
              }
              break;
          }
        }
      })
    });
    if (!isError) {

      const payload = {
        store_pickup: storePickup,
        order_processing_time: { value: orderProcessingTime.toString(), unit: orderProcessingTimeUnit },
      }
      if (homeDelivery) {
        payload['home_delivery'] = {
          "additional_delivery_cost": deliveryCharge,
          "additional_delivery_cost_unit": 'km',//deliveryChargeUnit
          "delivery_radius": deliveryRadius,
          "delivery_radius_unit": 'km',
          "free_delivery_radius": freeDeliveryRadius,
          "free_delivery_radius_unit": 'km'
        }
      }
      console.log(payload);
      this.props.submitStoreDeliveryAttr({ storeid: this.props.storeId, deliveryAttributes: payload });
      this.props.closeDialog();
    }
    this.setState({ form: tempState });
  }
  render() {
    let key = 'deliveryTime';
    let objVal = {
      orderProcessingTime: 0,
      deliveryCharge: 0,
      deliveryRadius: 5,
      freeDeliveryRadius: 1
    }
    if (this.props.fieldVal) {
      key = `deliveryTime_edit`;
      let tempVal = this.props.fieldVal;
      this.storePickup = tempVal.store_pickup == 'YES' ? true : false;
      objVal.orderProcessingTime = tempVal.order_processing_time.value;
      this.orderProcessingTimeUnit = { value: tempVal.order_processing_time.unit }
      if (tempVal.home_delivery) {
        objVal.deliveryCharge = tempVal.home_delivery.additional_delivery_cost;
        objVal.deliveryRadius = tempVal.home_delivery.delivery_radius;
        objVal.freeDeliveryRadius = tempVal.home_delivery.free_delivery_radius
        this.deliveryRadiusUnit = { value: tempVal.home_delivery.delivery_radius_unit };
        this.freeDeliveryRadiusUnit = { value: tempVal.home_delivery.free_delivery_radius_unit };
        this.deliveryChargeUnit = { value: tempVal.home_delivery.additional_delivery_cost_unit }
      }
      console.log('objVal', this.storePickup)
    }
    return (
      <>
        <div className="store-setting">
          <div className="setting-details">
            <p>Delivery Setting is</p>
            <p>Some text here Some text here Some text here Some text here Some text here ome text here Some text here</p>
          </div>
          <div className="store-profile-list">
            <List>
              <ListItem>
                <ListItemText
                  primary="Pick-up from store"
                  secondary={null}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <FormControlLabel
                      key={`${key}_0`}
                      control={
                        <Switch
                          key={`${key}_0_1`}
                          color="primary"
                          name="storePickup"
                          defaultChecked={this.storePickup}
                          onChange={this.onSwitchChange}
                        />
                      }
                    />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Self delivery"
                  secondary={null}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <FormControlLabel
                      key={`${key}_1`}
                      control={
                        <Switch
                          key={`${key}_1_0`}
                          color="primary"
                          name="homeDelivery"
                          checked={this.state.homeDelivery}
                          onChange={this.onSwitchChange}
                        />
                      }
                    />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
            {
              this.state.homeDelivery &&
              <>
                <div className="delvery-range">
                  <p>Delivery Range</p>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>

                      <TextField key={`${key}_2`}
                        type="phone"
                        inputRef={ref => this.deliveryRadiusInput = ref}
                        fullWidth id="standard-basic"
                        onKeyDown={e => this.preventKeyCodes(e)}
                        inputProps={{ defaultValue: objVal.deliveryRadius }}
                        error={this.state.form.deliveryRadius.error.isError}
                        helperText={this.state.form.deliveryRadius.error.message}
                      />
                    </Grid>
                    {/* <Grid item xs={6}>
                      <FormControl fullWidth>
                        <Select
                          key={`${key}_3`}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          inputProps={{ defaultValue: this.deliveryRadiusUnit.value }}
                          onChange={(e) => { this.deliveryRadiusUnit = { value: e.target.value } }}
                        >
                          <MenuItem value={'km'}>KM</MenuItem>
                          <MenuItem value={'meter'}>Meter</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid> */}
                  </Grid>
                </div>
                <div className="delvery-range">
                  <p>Free Delivery Range</p>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>

                      <TextField key={`${key}_2`}
                        type="number"
                        onKeyDown={e => this.preventKeyCodes(e)}
                        inputRef={ref => this.freeDeliveryRadiusInput = ref}
                        fullWidth id="standard-basic"
                        inputProps={{ defaultValue: objVal.freeDeliveryRadius }}
                        error={this.state.form.freeDeliveryRadius.error.isError}
                        helperText={this.state.form.freeDeliveryRadius.error.message}
                      />
                    </Grid>
                    {/* <Grid item xs={6}>
                      <FormControl fullWidth>
                        <Select
                          key={`${key}_3`}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          inputProps={{ defaultValue: this.freeDeliveryRadiusUnit.value }}
                          onChange={(e) => { this.freeDeliveryRadiusUnit = { value: e.target.value } }}
                        >
                          <MenuItem value={'km'}>KM</MenuItem>
                          <MenuItem value={'meter'}>Meter</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid> */}
                  </Grid>
                </div>
                <div className="delvery-range">
                  <p>Additional delivery charge</p>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        type="number"
                        key={`${key}_4`}
                        InputProps={{
                          startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                        }}
                        fullWidth id="standard-basic"

                        inputRef={ref => this.deliveryChargeInput = ref}
                        error={this.state.form.deliveryCharge.error.isError}
                        helperText={this.state.form.deliveryCharge.error.message}
                        inputProps={{ defaultValue: objVal.deliveryCharge }}
                      />
                    </Grid>
                    {/* <Grid item xs={6}>
                      <FormControl fullWidth>
                        <Select
                          key={`${key}_3`}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          inputProps={{ defaultValue: this.deliveryChargeUnit.value }}
                          onChange={(e) => { this.deliveryChargeUnit = { value: e.target.value } }}
                        >
                          <MenuItem value={'km'}>KM</MenuItem>
                          <MenuItem value={'meter'}>Meter</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid> */}
                  </Grid>
                </div>
              </>
            }
            <div className="fullfilment-time">
              <p>Order Processing time</p>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField fullWidth
                    type="number"
                    key={`${key}_0`}

                    inputRef={ref => this.orderProcessingTimeInput = ref}
                    inputProps={{
                      defaultValue: objVal.orderProcessingTime
                    }}
                    error={this.state.form.orderProcessingTime.error.isError}
                    helperText={this.state.form.orderProcessingTime.error.message}

                  />
                </Grid>
                {/* <Grid item xs={6}>
                  <FormControl fullWidth>
                    <Select
                      key={`${key}_1`}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      inputProps={{
                        defaultValue: this.orderProcessingTimeUnit.value
                      }}
                      onChange={(e) => this.orderProcessingTimeUnit = { value: e.target.value }}
                    >
                      <MenuItem value={'Min'}>Mins</MenuItem>
                      <MenuItem value={'Hr'}>Hour</MenuItem>
                    </Select>
                  </FormControl>
                </Grid> */}
              </Grid>
            </div>
          </div>
          <div className="text-center pb-5" onClick={() => this.onSubmit()}>
            <Button variant="outlined" color="primary">
              Submit
              </Button>
          </div>
        </div>
      </>
    )
  }
}
