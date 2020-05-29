import React, { Component } from 'react'
import { Divider, ListItemSecondaryAction, ListItem, ListItemText, Switch, IconButton, Icon, Button, LinearProgress, TextField, Input, InputAdornment, FormControl, Radio, InputLabel, FormLabel, FormControlLabel, RadioGroup, Dialog, Toolbar, AppBar, List, ListItemIcon, Grid, ButtonGroup, Select, MenuItem, DialogContent } from '@material-ui/core';
import { replaceUrl } from '../../utils/miscellaneous/imgLib';
import verifiedImg from '../../assets/img/verified.svg'
import GstForm from '../../components/gst-form';
import PanForm from '../../components/pan-form';
import TradeLiscenseForm from '../../components/trade-liscense-form';
import StoreProfileGeneralForm from '../../components/store-profile-general-form';
import FullfillmentTime from '../../components/fullfillment-time';
import FssaiForm from '../../components/fssai-form/';
import StoreOperation from '../../components/store-operation';
import DeliveryTime from '../../components/delivery-time';
import ProfileImageUpload from '../../components/profile-image-upload';

export default class StoreProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formDialog: false,
      fieldName: '',
      fieldVal: {}
    }
    window.storeProfile = this
  }

  componentDidMount() {
    if (this.props.storeId)
      this.getStoreDetails(this.props.storeId)
    // const doc = document.getElementById('profile_complete');
    // if (doc)
    //   doc.scrollIntoView({block:'start'})
  }

  getStoreDetails = (storeId) => {

    const payload = { storeId, latitude: '22.5392287', longitude: '88.3595163' };
    this.props.getProfileDetails(payload);

  }

  dialogState = (dialogState, fieldName, value) => {
    if (this.userStoreInfo.storeId) {
      console.log('value', this.userStoreInfo.storeId);
      this.setState({
        formDialog: dialogState,
        fieldName,
        fieldVal: value
      })
    }
  }
  closeDialog = (forceClose) => {
    if (forceClose)
      this.setState({ formDialog: false });
    else
      this.state.formDialog = false;
  }
  onLiveToggle = (e) => {
    if (this.userStoreInfo.storeId)
      this.props.updateStoreBasicDetails({ storeId: this.userStoreInfo.storeId, isLive: e.target.checked })
  }
  getDialogView = () => {
    const storeId = this.userStoreInfo.storeId;
    switch (this.state.fieldName) {
      case 'store_display_name':
        return (<StoreProfileGeneralForm type={this.state.fieldName} storeId={storeId} fieldVal={this.state.fieldVal} closeDialog={this.closeDialog} />)
      case 'store_address':
        return (<StoreProfileGeneralForm type={this.state.fieldName} storeId={storeId} fieldVal={this.state.fieldVal} closeDialog={this.closeDialog} />)
      case 'tagLine':
        return (<StoreProfileGeneralForm type={this.state.fieldName} storeId={storeId} fieldVal={this.state.fieldVal} closeDialog={this.closeDialog} />)
      case 'businessCategoryName':
        return (<StoreProfileGeneralForm type={this.state.fieldName} storeId={storeId} fieldVal={this.state.fieldVal} closeDialog={this.closeDialog} />)
      case 'fullfillment_time':
        return (<FullfillmentTime fieldVal={this.state.fieldVal} storeId={storeId} closeDialog={this.closeDialog} />)
      case 'self_delivery':
        return (<DeliveryTime fieldVal={this.state.fieldVal} storeId={storeId} closeDialog={this.closeDialog} />)
      case 'store_operation':
        return (<StoreOperation fieldVal={this.state.fieldVal} storeId={storeId} closeDialog={this.closeDialog} />)
      case 'gst':
        return (<GstForm fieldVal={this.state.fieldVal} storeId={storeId} closeDialog={this.closeDialog} />)
      case 'pan':
        return (<PanForm fieldVal={this.state.fieldVal} storeId={storeId} />)
      case 'tradelicense':

        return (<TradeLiscenseForm fieldVal={this.state.fieldVal} storeId={storeId} />)
      case 'fssai':
        return (<FssaiForm fieldVal={this.state.fieldVal} storeId={storeId} closeDialog={this.closeDialog} />)
    }
  }
  getValue = (keyName, updateName) => {
    let { data: val, updateFound } = this.getDataBasedOnUpdate(keyName, updateName);
    let storeVal = val;//this.userStoreInfo[keyName]
    if (!val)
      val = 'Not Set';
    if (keyName == 'businessCategoryName')
      storeVal = this.userStoreInfo.businessCategoryId;
    return { val, storeVal, updateFound }
  }

  getStoreSettingsValue = (keyName) => {
    let storeVal = null;
    let value = 'Not Set'

    switch (keyName) {
      case 'fullfillment_time':
        // if (JSON.parse(this.userStoreInfo.store_fullfilment_lead_time)) {
        // const obj = this.userStoreInfo.delivery_attributes.delivery_attributes.order_processing_time;
        const obj = this.userStoreInfo.store_fullfilment_lead_time;
        storeVal = { fullFillmentTime: obj };
        if (obj != "null")
          value = `${obj}`;
        // }
        break;
      case 'self_delivery':
        if (this.userStoreInfo.delivery_attributes) {
          storeVal = this.userStoreInfo.delivery_attributes;
          const obj = this.userStoreInfo.delivery_attributes.home_delivery;
          if (obj)
            value = `Yes (${obj.delivery_radius} ${obj.delivery_radius_unit}),Extra Charge`;
        }
        break;
      case 'store_operation':
        let daysArr = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
        let closedDays = [];
        let openDays = [];
        if (this.userStoreInfo.store_operation) {
          let tempArr = this.userStoreInfo.store_operation;
          storeVal = tempArr;
          tempArr.forEach(x => {
            if (x.isOpen)
              openDays.push(x.dayName);
            else
              closedDays.push(x.dayName)
          })
          console.log('openDays', openDays, closedDays)
          if (openDays.length > closedDays.length) {
            if (closedDays.length > 0)
              value = `${closedDays.join(',')} Closed`
            else
              value = openDays.length == daysArr.length ? `Open all days` : `${openDays.join(',')} Open`
          }
          else {
            if (openDays.length > 0)
              value = `${openDays.join(',')} Open`
            else
              value = closedDays.length == daysArr.length ? `Closed all days` : `${closedDays.join(',')} Closed`
          }
        }
    }

    return { value, storeVal };
  }

  getStoreComplianceValue = (keyName) => {
    let found = null;
    if (this.storeCompliance)
      found = this.storeCompliance.find(x => keyName.toUpperCase() == x.complianceType);
    if (found)
      return found;
    else {
      return { label: 'Not Filled' }
    }
  }
  uploadImage = (url, type) => {
    let payload = type == 'cover' ? { coverImage: url } : { logoUrl: url };
    if (this.userStoreInfo.storeId)
      this.props.updateStoreBasicDetails({ storeId: this.userStoreInfo.storeId, ...payload });
  }

  confirmLocation = (nativepayload) => {
    let payload = { storeId: nativepayload.storeId, address: nativepayload.address, latitude: nativepayload.latitude, longitude: nativepayload.longitude }
    // let payload = { storeId: this.props.storeId, address: this.TemplocationObj.addressObj.address, latitude: this.TemplocationObj.lat, longitude: this.TemplocationObj.long }
    this.props.updateStoreBasicDetails(payload);
    // this.props.closeDialog()

    // this.updateAddress()
  }

  getDataBasedOnUpdate = (actualType, updateType) => {
    let obj = { data: null, updateFound: false }
    const storeUpdateRequest = this.storeUpdateRequest;
    if (storeUpdateRequest[updateType]) {
      if (storeUpdateRequest[updateType] == this.userStoreInfo[actualType])
        obj.data = this.userStoreInfo[actualType];
      else
        obj = { data: storeUpdateRequest[updateType], updateFound: true };
    } else
      obj.data = this.userStoreInfo[actualType];
    return obj;
  }

  render() {
    const userStoreInfo = this.props.userStoreInfo ? this.props.userStoreInfo.toJS() : {};
    this.userStoreInfo = userStoreInfo.sourceAsMap ? userStoreInfo.sourceAsMap : { store_profile_completion_percent: 40 };
    this.storeCompliance = userStoreInfo.storeCompliance;

    this.storeUpdateRequest = {};
    if (this.userStoreInfo.activeUpdateRequest) {
      this.storeUpdateRequest = this.userStoreInfo.activeUpdateRequest;
    }
    let { data: coverImage, updateFound: coverUpdate } = this.getDataBasedOnUpdate('store_cover_image', 'coverImage');
    let { data: logoImage, updateFound: logoUpdate } = this.getDataBasedOnUpdate('store_logo_url', 'logoUrl');
    let { data: storeDisplayName, updateFound: displayNameUpdate } = this.getDataBasedOnUpdate('store_display_name', 'storeName')
    return (
      <div className="profile-view-cont">
        {/* <div className="profile-complete" id="profile_complete">
          <LinearProgress variant="determinate" value={Number(this.userStoreInfo.store_profile_completion_percent)} />
          <div className="store-complete-value d-flex align-center justfy-space-btw">
            <div className="complete-text">
              <p>Your Store</p>
              <h3>{100 - Number(this.userStoreInfo.store_profile_completion_percent)}% to complete</h3>
            </div>
            {
              100 - Number(this.userStoreInfo.store_profile_completion_percent) > 0 &&
              <div className="complete-now-btn">
                <Button color="primary">Complete Now</Button>
              </div>
            }
          </div>
        </div> */}
        <div className="profile-view">

          <div className="cover-image">
            {
              coverUpdate &&
              <div className="pending-cover">
                <Icon>watch_later</Icon>
                <p className="pening-text">Cover image is pending for approval</p>
              </div>
            }
            {
              coverImage &&
              <img src={replaceUrl(coverImage, 'cover_image')} alt="cover" />
            }
            {this.userStoreInfo.storeId && <ProfileImageUpload name={this.userStoreInfo.store_display_name} updateProfileImage={this.uploadImage} type={'cover'} updateFullScreenLoaderState={this.props.updateFullScreenLoaderState} />}

          </div>
          <div className="store-profile-details">
            <div className="profile-picture">
              {
                logoImage &&
                <img src={replaceUrl(logoImage, 'store_profile')} alt="profile" />
              }
              {
                logoUpdate ?
                  <div className="upload-profile pending-profile-img">
                    <IconButton size="small" aria-label="upload picture" component="span">
                      <p className="pending-profile-text">Store image is pending for approval</p>
                      <Icon>watch_later</Icon>
                    </IconButton>
                  </div>
                  :
                  <>
                    {this.userStoreInfo.storeId && <ProfileImageUpload name={this.userStoreInfo.store_display_name} updateProfileImage={this.uploadImage} type={'logo'} updateFullScreenLoaderState={this.props.updateFullScreenLoaderState} />}
                  </>
              }
            </div>
            <div className="profile-details-name">
              <h1>
                {storeDisplayName}
                {displayNameUpdate && <span>(Pending for approval)</span>}
              </h1>
              <p>
                Hey there! My store is live on Nextdoorhub.
            </p>
            </div>
            <div className="store-status">
              {
                userStoreInfo.store_status == 'PENDING' ?
                  <>Your store is pending for approval</>
                  :
                  <>
                    Accepting orders
                {/* <span>
                      <FormControlLabel
                        control={
                          <Switch
                            key={`user-${this.userStoreInfo.storeId}`}
                            name="checkedB"
                            color="primary"
                            checked={this.userStoreInfo.is_live}
                            onChange={this.onLiveToggle}
                          />
                        }
                      />
                    </span> */}
                  </>
              }
            </div>
          </div>
          {/* <div className="text-center">
          <Button color="primary" variant="outlined" onClick={() => this.dialogState(true, 'pan')}>Edit Store</Button>
        </div> */}
        </div>
        <div className="store-profile-list-cont">

          <div className="profile-complete" id="profile_complete">
            <LinearProgress variant="determinate" value={Number(this.userStoreInfo.store_profile_completion_percent)} />
            <div className="store-complete-value d-flex align-center justfy-space-btw">
              <div className="complete-text">
                <p>Your Store</p>
                <h3>{100 - Number(this.userStoreInfo.store_profile_completion_percent)}% to complete</h3>
              </div>
              {
                100 - Number(this.userStoreInfo.store_profile_completion_percent) > 0 &&
                <div className="complete-now-btn">
                  <Button color="primary">Complete Now</Button>
                </div>
              }
            </div>
          </div>

          <div className="store-profile-list">

            <List>
              {
                [
                  { label: 'Store Name', key: 'store_display_name', updateName: 'storeName' },
                  { label: 'Tag Line', key: 'tagLine', updateName: 'tagLine' },
                  { label: 'Address', key: 'store_address', updateName: 'address' },
                  { label: 'Business Category', key: 'businessCategoryName', updateName: 'businessCategoryName' },

                ].map(setting => {
                  let { val, storeVal, updateFound } = this.getValue(setting.key, setting.updateName);

                  if (setting.key == 'store_address') {
                    if (updateFound) {
                      storeVal = { lat: this.storeUpdateRequest.latitude, long: this.storeUpdateRequest.longitude };
                    } else {
                      if (this.userStoreInfo.location) {
                        const { lat, lon } = this.userStoreInfo.location;
                        storeVal = { lat, long: lon }
                      }
                    }
                  }
                  return (
                    <>
                      <ListItem onClick={() => this.dialogState(true, setting.key, storeVal)}>
                        <ListItemText primary={setting.label} secondary={val} />
                        {
                          updateFound ?
                            <ListItemSecondaryAction className="pending-approval">
                              <IconButton edge="end">
                                <p className="pening-text">{setting.label} is pending for approval</p>
                                <Icon>watch_later</Icon>
                              </IconButton>
                            </ListItemSecondaryAction>
                            :
                            <ListItemSecondaryAction onClick={() => this.dialogState(true, setting.key, storeVal)}>
                              <IconButton edge="end">
                                <Icon>chevron_right</Icon>
                              </IconButton>
                            </ListItemSecondaryAction>
                        }
                      </ListItem>
                      <Divider />
                    </>
                  )
                })
              }
            </List>
          </div>
          <h5 className="heading">Store Settings</h5>
          <div className="store-profile-list">
            <List>
              {
                [
                  // { icon: 'timelapse', label: 'Fullfillment Time', key: 'fullfillment_time' },
                  { icon: 'two_wheeler', label: 'Delivery Settings', key: 'self_delivery', disabled: this.userStoreInfo.enable_delivery_request },
                  { icon: 'store', label: 'Store Operation', key: 'store_operation' },
                ].map(setting => {
                  const { value, storeVal } = this.getStoreSettingsValue(setting.key);
                  return (
                    <>
                      <ListItem onClick={() => { setting.disabled ? console.log() : this.dialogState(true, setting.key, storeVal) }}>
                        <ListItemIcon>
                          <Icon>{setting.icon}</Icon>
                        </ListItemIcon>
                        {
                          setting.disabled ?
                            <ListItemText primary={setting.label} secondary={'Disabled'} />
                            :
                            <>
                              <ListItemText primary={setting.label} secondary={value} />
                              <ListItemSecondaryAction onClick={() => { setting.disabled ? console.log() : this.dialogState(true, setting.key, storeVal) }}>
                                <IconButton edge="end">
                                  <Icon>chevron_right</Icon>
                                </IconButton>
                              </ListItemSecondaryAction>
                            </>
                        }
                      </ListItem>
                      <Divider />
                    </>
                  )
                })
              }
              <ListItem>
                <ListItemIcon>
                  <Icon>description</Icon>
                </ListItemIcon>
                <ListItemText primary="Order Note" secondary="The order may be changed" />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <Icon>money</Icon>
                </ListItemIcon>
                <ListItemText primary="Payment Information" secondary="Disabled" />
                {/* <ListItemSecondaryAction>
                  <IconButton edge="end">
                    <Icon>chevron_right</Icon>
                  </IconButton>
                </ListItemSecondaryAction> */}
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <Icon>account_balance</Icon>
                </ListItemIcon>
                <ListItemText primary="Bank Details" secondary="Disabled" />
                {/* <ListItemSecondaryAction>
                  <IconButton edge="end">
                    <Icon>chevron_right</Icon>
                  </IconButton>
                </ListItemSecondaryAction> */}
              </ListItem>
            </List>
          </div>
          <h5 className="heading"><img src="https://cdn.countryflags.com/thumbs/india/flag-400.png" /> Compliance</h5>
          <div className="store-profile-list">

            <List>
              {
                [
                  { label: "Goods & Service Tax (GST)", key: 'gst' },
                  { label: 'FSSAI', key: 'fssai' },
                  { label: 'PAN Number', key: 'pan' },
                  { label: 'Trade License', key: 'tradelicense' }

                ].map(setting => {
                  const val = this.getStoreComplianceValue(setting.key);
                  console.log('val', val)
                  return (
                    <>
                      <ListItem onClick={() => this.dialogState(true, setting.key, val)}>
                        <ListItemText primary={setting.label} secondary={val.label ? val.label : 'Not Set'} />
                        {/* <span className="pending-profile">Pending</span> */}
                        <ListItemSecondaryAction onClick={() => this.dialogState(true, setting.key, val)}>
                          <IconButton edge="end">
                            <Icon>chevron_right</Icon>
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <Divider />
                    </>
                  )
                })
              }
            </List>
          </div>
        </div>

        <Dialog open={this.state.formDialog} fullScreen className="edit-modal">
          {this.state.fieldName !== 'store_address' && <AppBar position="static" className="white-appbar">
            <Toolbar>
              <IconButton edge="start" aria-label="menu" onClick={() => this.dialogState(false)}>
                <Icon>arrow_back</Icon>
              </IconButton>

            </Toolbar>
          </AppBar>}
          <DialogContent>
            {this.getDialogView()}
          </DialogContent>

          {/* Fullfillment Time */}


          {/* Store Operation */}

        </Dialog>
      </div>
    )
  }
}

