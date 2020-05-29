import React, { Component } from 'react'
import { TextField, Button, IconButton, Icon, AppBar, Toolbar } from '@material-ui/core';
import MapView from '../../components/map-view';
import StoreCreateBusinessCategory from '../store-create-businessCategory';

export default class StoreProfileGeneralForm extends Component {
  constructor(props) {
    super(props)
    window.profileAddressClass = this
    this.state = {
      form: {
        name: {
          error: '',
          isError: false
        },
        tagLine: {
          error: '',
          isError: false
        }
      }
    }
  }
  componentDidMount() {
    console.log('called')
  }
  addressChange = (data) => {
    this.TemplocationObj = { lat: data.lat, long: data.lng, addressObj: data, setByUser: true, address_type: null };
  }
  confirmLocation = (nativepayload) => {
    // let payload = { storeId: nativepayload.storeId, address: nativepayload.address, latitude: nativepayload.latitude, longitude: nativepayload.longitude }
    let payload = { storeId: this.props.storeId, address: this.TemplocationObj.addressObj.address, latitude: this.TemplocationObj.lat.toString(), longitude: this.TemplocationObj.long.toString() }
    this.props.updateStoreBasicDetails(payload);
    this.props.closeDialog();
  }
  updateName = () => {
    const name = this.nameInput.value.trim();
    let tempState = this.state.form;
    if (!name.length) {
      tempState.name.error = 'Required';
      tempState.name.isError = true;
    } else {
      let payload = { storeId: this.props.storeId, storeName: name }
      this.props.updateStoreBasicDetails(payload);
      this.props.closeDialog()
      tempState.name.error = '';
      tempState.name.isError = false;
    }
    this.setState({ form: tempState });
  }
  updateTagLine = () => {
    const tagLine = this.tagInput.value.trim();
    let payload = { storeId: this.props.storeId, tagLine }
    this.props.updateStoreBasicDetails(payload);
    this.props.closeDialog()
  }
  updateBusinessCategory = () => {
    let payload = { storeId: this.props.storeId, businessCategoryId: this.businessCategoryId.id };
    this.props.updateStoreBasicDetails(payload);
    this.props.closeDialog()
  }
  getView = ({ type, fieldVal }) => {
    console.log('type', type);
    const value = fieldVal ? fieldVal : '';
    switch (type) {
      case 'store_display_name':
        return (
          <>
            <TextField
              fullWidth
              required
              key={`name_1`}
              label="Name"
              style={{ margin: '0 0 20px 0' }}
              inputRef={ref => this.nameInput = ref}
              error={this.state.form.name.error.isError}
              helperText={this.state.form.name.error.message}
              inputProps={{
                defaultValue: value
              }}
            />
            <div className="text-center pb-5">
              <Button variant="outlined" color="primary" onClick={() => this.updateName()}>
                Update
              </Button>
            </div>
          </>
        );
      case 'store_address':

        return (
          <>
            <div className="change-store-address">
              <div className="map-back">
                <IconButton edge="start" onClick={() => { console.log('clicked'); this.props.closeDialog(true)}}>
                  <Icon>arrow_back</Icon>
                </IconButton>
              </div>
              <AppBar className="map-header current-location-header confirm-location-header">
              <Toolbar>

              </Toolbar>
            </AppBar>
              <MapView locationObj={value} addressChange={this.addressChange} mapHeight={'calc(100vh - 138px)'} />
              <div className="confirm-loc pt-15px pb-15px">
                <Button variant="contained" color="primary" disableElevation onClick={() => this.confirmLocation()}>
                  Confirm Location
            </Button>
              </div>
            </div>
          </>
        )
      // return true;
      case 'businessCategoryName':
        return (
          <div className="store-create-category">
            <StoreCreateBusinessCategory businessCategoryId={{ id: value }} onChange={(x) => this.businessCategoryId = x} />
            {/* {
              this.state.form.businessCategoryId.error.isError &&
              <p>{this.state.form.businessCategoryId.error.message}</p>
            } */}
            <div className="text-center create-store-btn">
              <Button fullWidth variant="contained" disableElevation color="primary" onClick={() => this.updateBusinessCategory()}>
                Update
            </Button>
            </div>
          </div>
        )
      case 'tagLine':
        return (<>
          <TextField
            fullWidth

            key={`name_2`}
            label="Tag Line"
            style={{ margin: '0 0 20px 0' }}
            inputRef={ref => this.tagInput = ref}
            error={this.state.form.tagLine.error.isError}
            helperText={this.state.form.tagLine.error.message}
            inputProps={{
              defaultValue: value
            }}
          />
          <div className="text-center pb-5">
            <Button variant="outlined" color="primary" onClick={() => this.updateTagLine()}>
              Update
              </Button>
          </div>
        </>)
    }
  }
  render() {
    return (
      <>
        {this.getView(this.props)}
      </>
    )
  }
}
