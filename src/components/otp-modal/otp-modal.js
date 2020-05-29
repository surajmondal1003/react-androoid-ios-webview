import React, { Component } from 'react'
import CustomOtpInput from '../otp-input';
import Timer from '../timer';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { AppBar, Toolbar, IconButton, Icon } from '@material-ui/core';
export default class OtpModal extends Component {
  constructor(props) {
    super(props);
    this.otpInput = ''
    this.state = {
      otp: {
        error: {
          value: '',
          message: '',
          isError: false,
        },
        validation: /^[0-9]{4}$/,
      },
      timeObj: {
        timeOver: false,
        restart: true,
        minutes: 0,
        seconds: 15
      }

    }
  }
  onOtpChange = (otp, modalStateData) => {
    this.otpInput = otp;
    if (otp.length >= 4)
      this.submitOtp(modalStateData);
  }
  resendOtp = (modalStateData) => {
    this.otpInput = '';
    const { phone, type, countryCode, modalFor } = modalStateData;
    if (modalFor == 'phone_update') {
      const data = { phone, countryCode };
      this.props.updateUserProfile({ data, type, forStore: modalStateData });
    } else {
      const data = { phone, type, countryCode };
      this.props.getLoginOtp({ data, forStore: modalStateData });
    }
    this.setState({
      timeObj: {
        timeOver: false,
        restart: true,
        minutes: 0,
        seconds: 15
      }
    });
  }
  resetTimer = () => {
    this.state.timeObj = {
      timeOver: false,
      restart: true,
      minutes: 0,
      seconds: 15
    }

  }
  timesOver = () => {
    this.setState({
      timeObj: {
        timeOver: true,
        restart: false,
        minutes: 0,
        seconds: 0
      }
    });
  }
  submitOtp = (modalStateData) => {
    let otpInput = this.otpInput
    console.log('otpInput', this.otpInput);
    const tempState = { ...this.state.otp }
    const regEx = new RegExp(tempState.validation)
    let isError = false
    if (otpInput.length === 0 || !regEx.test(otpInput)) {
      tempState.error.message = 'Enter a valid 4 digit otp'
      tempState.error.isError = true
      isError = true
    } else {
      tempState.error.message = ''
      tempState.error.value = otpInput
      tempState.error.isError = false
      isError = false
    }
    if (!isError) {
      this.otpInput = '';
      const { phone, modalFor, name, ipBasedCountry } = modalStateData;
      if (modalFor == 'phone_update') {
        const data = { countryCode: modalStateData.countryCode, otp: otpInput, phone: phone };
        this.props.verifyProfileOtp({ data, forStore: modalStateData });
      } else {
        const data = modalFor === 'joinNow' ? {
          otp: otpInput, phone, name,
          country: ipBasedCountry.countryCode,
          countryCode: ipBasedCountry.countryMobileCode
        } : {
            otp: otpInput,
            phone,
            country: ipBasedCountry.countryCode,
            countryCode: ipBasedCountry.countryMobileCode
          };
        this.props.sendLoginOtp({ data, forStore: modalStateData });
      }
      // this.props.verifyOtpAction({ data, otp: otpInput, type: this.otpType, addressDetails: this.addressDetails, modalConditionType: this.modalConditionType })
    }
    this.setState({ otp: tempState })
  }
  render() {
    const modalStateData = this.props.modalState.data;
    console.log('tiimer', this.state.timeObj.timeOver);
    const modalOpen = this.props.modalState.open;
    if (!modalStateData) {
      // if (this.state.timeObj.seconds != 15)
      this.resetTimer()
    }
    return (
      // open={this.props.modalState.open}
      <Dialog fullScreen open={this.props.modalState.open}>
        <AppBar position="static" className="noborder-appbar">
          <Toolbar>
            <IconButton aria-label="close" onClick={() => this.props.toggleOtpModal({ open: false, data: null })}>
              <Icon>arrow_back</Icon>
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className="otp-modal text-center">
          <h3>Verification Code</h3>
          {modalStateData && <h5>Please enter one time verification code<br /> <span>Sent to +{modalStateData.countryCode}{modalStateData.phone} </span></h5>}


          <Timer timesOver={this.timesOver} timeObj={this.state.timeObj} modalOpen={modalOpen} />
          <CustomOtpInput containerStyle={'otp-group'} onChange={(otp) => this.onOtpChange(otp, modalStateData)} />
          <div className="d-flex justfy-space-btw align-center resend">
            <span>Didn't received OTP?</span>
            <Button color="primary" disabled={!this.state.timeObj.timeOver} onClick={() => this.resendOtp(modalStateData)}>Resend OTP</Button>
          </div>
          {this.state.otp.error.isError && <p className="error">{this.state.otp.error.message}</p>}
          <div className="text-center mt-3 otp-btn">
            <Button variant="contained" disableElevation fullWidth color="primary" type="button" onClick={() => this.submitOtp(modalStateData)}>Verify</Button>
          </div>
        </div>
      </Dialog>
    )
  }
}
