import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SliderBanner from '../../components/slider-banner';
import apaImg from '../../assets/img/delivery.svg'
import flagImg from '../../assets/img/flag.png'
import fbImg from '../../assets/img/fb.svg'
import googleImg from '../../assets/img/google.svg'
import { FormHelperText, Dialog, IconButton } from '@material-ui/core';
import OtpModal from '../../components/otp-modal';
import JoinNow from '../../components/join-now/';
import FbLogin from '../../components/fb-login';
import Signin from '../../components/singin';
import GLogin from '../../components/g-login';
import { askForPermissioToReceiveNotifications } from '../../firebase';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: null,
      signinView: false,
      joinNowModal: false,
      facbookModal: false
    }
  }
  componentWillMount() {
    this.props.getCountryBasedOnIp();
  }
  async componentDidMount() {
    // const token = await askForPermissioToReceiveNotifications();
    // console.log('token::::::', token)
    // localStorage.setItem('ls', token);
  }
  toggleView = (viewName) => {
    this.setState({ view: viewName });
  }
  expandMore = () => {
    document.getElementById('g-login-btn').style.display = 'flex';
    document.getElementById('expand-btn').style.display = 'none';

  }
  getView = () => {
    switch (this.state.view) {
      case 'signin':
        return (
          <Dialog fullScreen open={true}>
            <Signin toggleView={this.toggleView} getLoginOtp={this.props.getLoginOtp} generalSignin={this.props.generalSignin} />
          </Dialog>
        )
      case 'join_now':
        return (
          <Dialog fullScreen open={true}>
            <JoinNow toggleView={this.toggleView} foreignRegisteration={this.props.foreignRegisteration} getLoginOtp={this.props.getLoginOtp} />
          </Dialog>)
      case 'facebook_modal':
        return (
          <Dialog fullScreen open={true} className="fb-modal">
            <FbLogin toggleView={this.toggleView} />
          </Dialog>
        )
      case 'google_modal':
        return (
          <Dialog fullScreen open={true} className="fb-modal">
            <GLogin toggleView={this.toggleView} />
          </Dialog>
        )
      default:
        return (
          <div className="text-center d-flex flex-col join-now">
            <Button disableElevation variant="contained" color="primary" onClick={() => this.toggleView('join_now')}>Join Now</Button>
            <Button
              variant="outlined"
              startIcon={<img height="18" src={fbImg} alt="fb" />}
              className="fb"
              onClick={() => this.toggleView('facebook_modal')}
            >
              Join with Facebook
            </Button>
            <div className="text-center" id='expand-btn' onClick={() => this.expandMore()}>
              <IconButton>
                <Icon>expand_more</Icon>
              </IconButton>
            </div>
            <Button
              style={{ display: 'none' }}
              id='g-login-btn'
              variant="outlined"
              startIcon={<img height="18" src={googleImg} alt="google" />}
              className="google"
              onClick={() => this.toggleView('google_modal')}
            >
              Join with Google
            </Button>
            <div className="sign-in">
              <Button className="signin" color="primary" onClick={() => this.toggleView('signin')}>
                Already have an account ? <i>Sign In</i>
              </Button>
            </div>
          </div>
        )
    }
  }
  render() {
    return (
      <>
        <div className="register d-flex">
          <div className="apa-image">
            {/* <img src={apaImg} alt="apa-explore" />
            <h1>Explore your world with APA</h1> */}
            <SliderBanner />
          </div>
          {
            this.getView()
          }
        </div>
        <OtpModal />
      </>
    )
  }
}


