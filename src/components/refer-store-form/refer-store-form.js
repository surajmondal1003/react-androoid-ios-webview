import React, { Component } from 'react'
import { Dialog, AppBar, Toolbar, IconButton, Icon, Typography, TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import GeoAutocomplete from '../geo-autocomplete';
import referImg from '../../assets/img/refer-store-form.svg';
import { getCity, getArea, getState, getAddressFromGeoCode, getCustomAddress, getZipCode, getOtherCity } from '../../utils/miscellaneous/geoCodeLib';
import { history } from '../../utils/config/app_config';



export default class ReferStoreForm extends Component {
  constructor(props) {
    super(props);
    this.storeAddress = {};
    this.businessCategory = {};
    this.state = {
      form: {
        storeName: {
          error: {
            isError: false,
            message: ''
          },
          checkParams: ['required'],
        },
        businessCategory: {
          error: {
            isError: false,
            message: ''
          },
          checkParams: ['required'],
        },
        storeMobileNumber: {
          error: {
            isError: false,
            message: ''
          },
          checkParams: ['required', 'regexValidation'],
          validation: '^[0-9]{10}$'
        },
        storeAddress: {
          error: {
            isError: false,
            message: ''
          },
          checkParams: ['required'],
        },
      }
    }
  }
  static getDerivedStateFromProps(props, state) {
    if (!props.businessCategoryList.length)
      props.getBusinessCategoryList()
    return null;
  }
  onPlaceSelected = (place) => {
    let address = place.formatted_address,
      addressArray = place.address_components,
      city = getCity(addressArray),
      area = getArea(addressArray),
      state = getState(addressArray),
      zipCode = getZipCode(addressArray),
      customAddress = getCustomAddress(addressArray),
      latValue = place.geometry.location.lat(),
      lngValue = place.geometry.location.lng();
    if (city) {
      if (city.length == 0)
        city = getOtherCity(addressArray);
    } else {
      city = getOtherCity(addressArray);
    }
    this.storeAddress = { lat: place.geometry.location.lat(), long: place.geometry.location.lng(), city, state, zipCode, area, address };
  }
  saveStore = () => {
    const storeName = this.storeNameInput.value;
    const businessCategory = this.businessCategory.id;
    const storeMobileNumber = this.storeMobileNumber.value;
    const storeAddress = this.storeAddress.lat;
    let isError = false;
    const tempState = this.state.form;
    const checkObj = {
      storeName,
      businessCategory,
      storeMobileNumber,
      storeAddress
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
          }
        }
      })
    });
    if (!isError) {
      const payload = {
        store_name: storeName,
        store_category_name: this.businessCategory.businessCategoryName,
        store_category_id: this.businessCategory.id,
        phone_number: storeMobileNumber,
        full_address: this.storeAddress.address,
        city: this.storeAddress.city,
        country: 'India',
        state: this.storeAddress.state,
        zipcode: this.storeAddress.zipCode,
        latitude: this.storeAddress.lat,
        longitude: this.storeAddress.long
      }
      const fromWeb = this.props.location.state && this.props.location.state.fromWeb ? true : false;
      this.props.referStoreAction(payload, fromWeb)
      console.log(payload);
    }
    this.setState({ form: tempState });
  }

  onKeyPress = (e) => {
    if (this.storeMobileNumber.value.length > 9) {
      e.preventDefault();
    }
  }


  render() {
    const businessCategory = this.props.businessCategoryList;
    // const modalState = this.props.modalState.open;
    // console.log('modalState', modalState, businessCategory);
    const key = 'refer_store';
    return (
      <>
        <Dialog open={true} fullScreen>
          <AppBar position="static" className="white-appbar">
            <Toolbar>
              <IconButton edge="start" aria-label="menu" onClick={() => {
                console.log('go back')

                if (this.props.location.state && this.props.location.state.fromWeb) {
                  console.log('from web')
                  console.log(this.props.location.state)
                  history.goBack()
                } else {
                  console.log('from native')
                  if (window.TestAndroid) {
                    window.TestAndroid.goBackToApa(true)
                  }
                  if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.goBackToApa) {
                    window.webkit.messageHandlers.goBackToApa.postMessage(true);
                  }
                }
              }
              }>
                <Icon>arrow_back</Icon>
              </IconButton>
              <Typography variant="h6">
                Refer Store
              </Typography>
              {/* <IconButton aria-label="close" onClick={() => this.props.toggleCreateProductModal()}>
              <Icon>close</Icon>
            </IconButton> */}
            </Toolbar>
          </AppBar>
          {/* <div className="white-bg reffer-store-cont">
            <div className="create-store-form">
              <div className="refer-store-location">
                <GeoAutocomplete key={`${key}_4`} className={'refer-store-map'} onPlaceSelected={this.onPlaceSelected} />
                {this.state.form.storeAddress.error.isError && <p style={{ color: 'red' }}>{this.state.form.storeAddress.error.message}</p>}

              </div>
              <TextField
                fullWidth
                required
                multiline

                key={`${key}_1`}
                label="Store Name"
                style={{ margin: '0 0 20px 0' }}
                inputRef={ref => this.storeNameInput = ref}
                error={this.state.form.storeName.error.isError}
                helperText={this.state.form.storeName.error.message}
              />
                <Autocomplete
                  key={`${key}_3`}
                  style={{ margin: '0 0 20px 0' }}
                  id="combo-box-demo"
                  // getOptionSelected={(option, value) => option.id == this.businessCategory}s
                  getOptionLabel={(option) => option.businessCategoryName}
                  options={businessCategory}
                  onChange={(e, newVal) => this.businessCategory = newVal}
                  // defaultValue={chosenCategory}
                  renderInput={(params) => <TextField {...params} label="Select Store Category" />}
                />
                {this.state.form.businessCategory.error.isError && <p style={{ color: 'red' }}>{this.state.form.businessCategory.error.message}</p>}
              <TextField
                type="number"
                fullWidth
                required

                key={`${key}_2`}
                label="Store Mobile Number"
                style={{ margin: '0 0 20px 0' }}
                inputRef={ref => this.storeMobileNumber = ref}
                error={this.state.form.storeMobileNumber.error.isError}
                helperText={this.state.form.storeMobileNumber.error.message}

              />
              
            </div>
            <div className="text-center pb-5">
              <Button variant="outlined" color="primary" onClick={() => this.saveStore()}>
                Submit
              </Button>
            </div>
          </div> */}

          <div className="reffer-store-cont">
            <div className="refer-store-image">
              <img src={referImg} />
            </div>
            <div className="create-store-form">
              <div>
                <div className="refer-store-location" style={{ margin: '0 0 20px 0' }} >
                  <GeoAutocomplete key={`${key}_4`} className={'refer-store-map'} onPlaceSelected={this.onPlaceSelected} />
                  {this.state.form.storeAddress.error.isError && <p style={{ color: 'red' }}>{this.state.form.storeAddress.error.message}</p>}

                </div>
                <TextField
                  fullWidth
                  required
                  multiline

                  key={`${key}_1`}
                  label="Store Name"
                  style={{ margin: '0 0 20px 0' }}
                  inputRef={ref => this.storeNameInput = ref}
                  error={this.state.form.storeName.error.isError}
                  helperText={this.state.form.storeName.error.message}
                />
                {/* <FormControl fullWidth  style={{ margin: '0 0 20px 0' }}> */}
                {/* <InputLabel id="demo-simple-select-label">Select Store Category</InputLabel> */}
                <Select
                  key={`${key}_3`}
                  fullWidth
                  style={{ margin: '0 0 20px 0' }}
                  id="combo-box-demo"
                  inputProps={{ 'aria-label': 'Without label' }}
                  className="empty-label"
                  // getOptionSelected={(option, value) => option.id == this.businessCategory}s
                  // getOptionLabel={(option) => option.businessCategoryName}
                  // value={businessCategory}
                  // onChange={(e, newVal) => this.businessCategory = newVal}
                  // defaultValue={chosenCategory}
                  onChange={(e, newVal) => {
                    console.log(e.target.value)
                    this.businessCategory = e.target.value
                  }}
                >
                  <MenuItem value="" disabled>
                    Select Store Category
                  </MenuItem>
                  {
                    businessCategory.map(element => {
                      return <MenuItem key={element.id} value={element}>{element.businessCategoryName}</MenuItem>
                    })
                  }
                </Select>
                {/* </FormControl> */}
                {/* <Autocomplete
                  key={`${key}_3`}
                  style={{ margin: '0 0 20px 0' }}
                  id="combo-box-demo"
                  
                  // getOptionSelected={(option, value) => option.id == this.businessCategory}s
                  getOptionLabel={(option) => option.businessCategoryName}
                  options={businessCategory}
                  onChange={(e, newVal) => this.businessCategory = newVal}
                  // defaultValue={chosenCategory}
                  renderInput={(params) => <TextField {...params} label="Select Store Category" className="visible-combo-box" />}
                /> */}
                {this.state.form.businessCategory.error.isError && <p style={{ color: 'red' }}>{this.state.form.businessCategory.error.message}</p>}
                <TextField
                  type="number"
                  fullWidth
                  required

                  key={`${key}_2`}
                  label="Store Mobile Number"
                  style={{ margin: '0 0 20px 0' }}
                  inputRef={ref => this.storeMobileNumber = ref}
                  error={this.state.form.storeMobileNumber.error.isError}
                  helperText={this.state.form.storeMobileNumber.error.message}
                  onKeyPress={this.onKeyPress}
                />
              </div>
              <div className="text-center pb-5">
                <Button variant="outlined" color="primary" onClick={() => this.saveStore()}>
                  Submit
              </Button>
              </div>
            </div>

          </div>

        </Dialog>
      </>
    )
  }
}