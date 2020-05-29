import React, { Component } from 'react'
import { TextField, Button, IconButton, Dialog, Toolbar, AppBar, Icon, Typography, InputAdornment, ListItem, ListItemText, ListItemSecondaryAction, ListItemAvatar, Avatar } from '@material-ui/core';

export default class SetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        currentP: {
          error: {
            isError: false,
            message: ''
          }
        },
        confirmP: {
          error: {
            isError: false,
            message: ''
          }
        }
      },
      dialogState: false,
      showPassword: false
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const modalState = nextProps.modalState.toJS();
    if (!modalState.open) {
      if (prevState.dialogState) {
        nextProps.toggleProfileModal({ open: true });
        return { dialogState: false }
      }
    }
  }
  toggleDialog = () => {
    this.setState((prevState) => ({ dialogState: !prevState.dialogState }))
  }
  toggleShowPassword = () => {
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }))
  }
  setPassword = () => {
    const currentP = this.currentPInput.value.trim();

    let isError = false;
    const tempState = this.state.form;
    const checkObj = {
      currentP,
      // confirmP
    }
    // let isError = false;
    Object.keys(checkObj).forEach(x => {
      const objVal = checkObj[x] ? checkObj[x].toString() : '';
      if (!objVal.length) {
        isError = true;
        tempState[x].error.message = 'Required Field';
        tempState[x].error.isError = true
      } else if (objVal.length < 8) {
        isError = true;
        tempState[x].error.message = 'Password should be of minimum 8 charachters';
        tempState[x].error.isError = true
      }
      else {
        tempState[x].error.message = '';
        tempState[x].error.isError = false
      }
    });
    if (!isError) {

      this.props.updatePassword({ password: currentP });

    }
    this.setState({ form: tempState });
  }
  render() {
    let key = 'password';

    return (
      <>
        <ListItem onClick={() => this.toggleDialog()} className="profile-list-4">
          <ListItemAvatar>
                <Avatar>
                  <Icon>lock</Icon>
                </Avatar>
              </ListItemAvatar>
          <ListItemText primary="Password" secondary="Set Password" />
          <ListItemSecondaryAction onClick={() => this.toggleDialog()}>
            <IconButton edge="end">
              <Icon>chevron_right</Icon>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Dialog open={this.state.dialogState} fullScreen className="modify-modal">
          <AppBar position="static" className="white-appbar">
            <Toolbar>
              <IconButton edge="start" aria-label="menu" onClick={() => this.toggleDialog()}>
                <Icon>arrow_back</Icon>
              </IconButton>
              <Typography variant="h6">
                Set Password
            </Typography>
            </Toolbar>
          </AppBar>
          <div className="white-bg">
            <div className="create-store-form">

              <TextField
                fullWidth
                type={this.state.showPassword ? "text" : "password"}
                key={`${key}_2`}
                label="New Password"
                style={{ margin: '0 0 20px 0' }}
                inputRef={ref => this.currentPInput = ref}
                error={this.state.form.currentP.error.isError}
                helperText={this.state.form.currentP.error.message}
                InputProps={{
                  endAdornment:
                    < InputAdornment position="end" >
                      <IconButton onClick={() => this.toggleShowPassword('currenP')}>
                        <Icon className="material-icons-outlined">{this.state.showPassword ? 'visibility_on' : 'visibility_off'}</Icon>
                      </IconButton>
                    </InputAdornment>

                }}

              />
            </div>
            <div className="text-center pb-5">
              <Button variant="outlined" color="primary" onClick={() => this.setPassword()}>
                Set Password
              </Button>
            </div>
          </div>
        </Dialog>
      </>
    )
  }
}
