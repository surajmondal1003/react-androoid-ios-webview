import React, { Component } from 'react'
import { TextField, Button, IconButton, Dialog, Toolbar, AppBar, Icon, Typography, InputAdornment, List, ListItem, ListItemText, ListItemSecondaryAction, Divider, FormControlLabel, Radio, Grid, RadioGroup, ListItemAvatar, Avatar } from '@material-ui/core';

import ChangePassword from '../change-password';
import SetPassword from '../set-password';
import DatePickerCustom from '../date-picker';
import verifiedImg from '../../assets/img/verified.svg'
import OtpModal from '../otp-modal';
export default class EditProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        name: {
          error: {
            isError: false,
            message: ''
          }
        },
        phone: {
          error: {
            isError: false,
            message: ''
          },
          validation: '^[0-9]{10}$'
        },
        email: {
          error: {
            isError: false,
            message: ''
          },
          validation: '^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$'
        },
        dob: {
          error: {
            isError: false,
            message: ''
          }
        }
      },
      dialogState: false,
      formDialog: false,
      fieldName: 'name'
    }
  }

  toggleFormDialog = (fieldName) => {
    this.setState((prevState) => ({ formDialog: !prevState.formDialog, fieldName }))
  }
  getView = (userDetails, key) => {
    const defVal = userDetails[this.state.fieldName] ? userDetails[this.state.fieldName] : '';
    switch (this.state.fieldName) {
      case 'name':
        return (
          <TextField
            fullWidth
            key={`${key}_1`}
            label="Name"
            style={{ margin: '0 0 20px 0' }}
            inputRef={ref => this.nameInput = ref}
            error={this.state.form.name.error.isError}
            helperText={this.state.form.name.error.message}
            inputProps={{
              defaultValue: defVal
            }}
          />
        );
      case 'phone':
        return (
          <TextField
            fullWidth
            key={`${key}_2`}
            label="Mobile Number"
            style={{ margin: '0 0 20px 0' }}
            inputRef={ref => this.phoneInput = ref}
            error={this.state.form.phone.error.isError}
            helperText={this.state.form.phone.error.message}
            inputProps={{
              defaultValue: defVal
            }}
          />
        );
      case 'email':
        return (
          <TextField
            fullWidth
            key={`${key}_3`}
            label="Email"
            style={{ margin: '0 0 20px 0' }}
            inputRef={ref => this.emailInput = ref}
            error={this.state.form.email.error.isError}
            helperText={this.state.form.email.error.message}
            inputProps={{
              defaultValue: defVal
            }}
          />
        )
      case 'dob':
        const dob = defVal.toString().length > 0 ? defVal : new Date();
        return (
          <DatePickerCustom key={`${key}_4`} date={dob} onDateChange={(val) => this.dobInput = { value: val }} />
        )
    }
  }
  updateProfile = () => {
    const fieldName = this.state.fieldName
    let inputValue = this[`${fieldName}Input`].value;
    let tempState = { ...this.state.form };
    let isError = false;
    const checkObj = { [fieldName]: inputValue };
    console.log('checlObj', checkObj);
    Object.keys(checkObj).map(obj => {
      const objVal = checkObj[obj] ? checkObj[obj].toString() : '';
      if (!objVal.length) {
        tempState[obj].error.isError = true;
        tempState[obj].error.message = 'Required field';
        isError = true;
      } else if (tempState[obj].validation) {
        const regex = fieldName == 'email' ? new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/) : new RegExp(tempState[obj].validation);
        if (!regex.test(objVal)) {
          tempState[obj].error.isError = true;
          tempState[obj].error.message = 'Invalid input';
          isError = true;
        } else {
          tempState[obj].error.isError = false;
          tempState[obj].error.message = ''
        }
      } else {
        console.log('enters else')
        tempState[obj].error.isError = false;
        tempState[obj].error.message = ''
      }
    });
    if (!isError) {
      this.setState({ form: tempState });
      let payload = {
        data: { [fieldName]: inputValue },
        type: fieldName
      }
      if (this.state.fieldName == 'phone') {
        payload.data = { ...payload.data, countryCode: this.props.userDetails.get('countryCode') };
        payload.forStore = { ...payload.data, modalFor: 'phone_update' };
      }
      this.props.updateProfile(payload);
      this.state.formDialog = false;
    } else {
      this.setState({ form: tempState });
    }
  }
  updateGender = (event, value) => {
    this.props.updateProfile({ data: { 'gender': value }, type: 'gender' });
  }
  render() {
    let name, phone, email, dob = '';
    let userDetails = null;
    let key = 'profile'
    if (this.props.userDetails) {
      userDetails = this.props.userDetails.toJS();
      // key=`${key}_${userDetails.id}`
      name = userDetails.name;
      phone = userDetails.phone ? userDetails.phone : '';
      email = userDetails.email ? userDetails.email : '';
      dob = userDetails.dob ? userDetails.dob : '';
    }
    console.log('dialogState', this.state.dialogState)
    return (
      <>
        <div className="store-profile-list">
          <List>
            <ListItem onClick={() => this.toggleFormDialog('name')} className="profile-list-1">
              <ListItemAvatar>
                <Avatar>
                  <Icon>person</Icon>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Name" secondary={name} />
              <ListItemSecondaryAction onClick={() => this.toggleFormDialog('name')}>
                <IconButton edge="end">
                  <Icon>chevron_right</Icon>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem className="profile-list-2" onClick={() => { userDetails.registerMode == 'phone' ? console.log() : this.toggleFormDialog('phone') }}>
              <ListItemAvatar>
                <Avatar>
                  <Icon>phone_android</Icon>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Mobile Number" secondary={phone} />
              <ListItemSecondaryAction onClick={() => { userDetails.registerMode == 'phone' ? console.log() : this.toggleFormDialog('phone') }}>
                {userDetails.phone &&
                  <>
                    {userDetails.mobileOtpVerified ?
                      <span className="verified-profile">
                        <img src={verifiedImg} alt="verified" />
                      </span>
                      :
                      <span className="pending-profile">Verify</span>
                    }
                  </>
                }
                <IconButton edge="end">
                  <Icon>chevron_right</Icon>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem className="profile-list-3" onClick={() => this.toggleFormDialog('email')}>
              <ListItemAvatar>
                <Avatar>
                  <Icon>mail</Icon>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Email" secondary={email ? email : 'Set Email'} />
              {userDetails.email &&
                <>
                  {userDetails.emailVerified ?
                    <>
                      <ListItemSecondaryAction onClick={() => this.toggleFormDialog('email')}>
                        <span className="verified-profile">
                          <img src={verifiedImg} alt="verified" />
                        </span>
                        <IconButton edge="end">
                          <Icon>chevron_right</Icon>
                        </IconButton>
                      </ListItemSecondaryAction>
                    </>
                    :
                    <span className="pending-profile">Verify</span>}
                </>
              }

            </ListItem>
            <Divider variant="inset" component="li" />
            {
              userDetails &&
              <>
                {userDetails.passwordSet ?
                  <ChangePassword changePassword={this.props.changePassword} />
                  :
                  <SetPassword updatePassword={this.props.updatePassword} />
                }
              </>
            }
            <Divider variant="inset" component="li" />
            <ListItem onClick={() => this.toggleFormDialog('dob')} className="profile-list-5">
              <ListItemAvatar>
                <Avatar>
                  <Icon>today</Icon>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Birth Date" secondary={dob.toString().length > 0 ? new Date(dob).toLocaleDateString() : "dd/mm/yyyy"} />
              <ListItemSecondaryAction onClick={() => this.toggleFormDialog('dob')}>
                <IconButton edge="end">
                  <Icon>chevron_right</Icon>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>

            <Divider variant="inset" component="li" />
            <ListItem className="profile-list-6">
              <ListItemAvatar>
                <Avatar>
                  <Icon>wc</Icon>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Gender" secondary={
                <React.Fragment>
                  <RadioGroup defaultValue={userDetails.gender} onChange={this.updateGender}>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <FormControlLabel value="MALE" control={<Radio color="primary" />} label="Male" />
                      </Grid>
                      <Grid item xs={4}>
                        <FormControlLabel value="FEMALE" control={<Radio color="primary" />} label="Female" />
                      </Grid>
                      <Grid item xs={4}>
                        <FormControlLabel value="OTHERS" control={<Radio color="primary" />} label="Other" />
                      </Grid>
                    </Grid>
                  </RadioGroup>
                </React.Fragment>
              } />
            </ListItem>
          </List>
        </div>

        <Dialog open={this.state.formDialog} fullScreen className="modify-modal">
          <AppBar position="static" className="white-appbar">
            <Toolbar>
              <IconButton edge="start" aria-label="menu" onClick={() => this.toggleFormDialog()}>
                <Icon>arrow_back</Icon>
              </IconButton>

            </Toolbar>
          </AppBar>
          <div className="white-bg">
            <div className="create-store-form">
              {
                this.getView(userDetails, key)
              }
            </div>
            <div className="text-center pb-5">
              <Button variant="outlined" color="primary" onClick={() => this.updateProfile()}>
                Update
          </Button>
            </div>
          </div>
        </Dialog>
        <OtpModal />
        {/* </Dialog> */}
      </>
    )
  }
}
