import * as constants from './constants';

export function getLoginOtp(payload) {
  return {
    type: constants.GET_OTP_LOGIN,
    payload
  }
}
export function sendLoginOtp(payload) {
  return {
    type: constants.SEND_OTP_LOGIN,
    payload
  }
}
export function toggleOtpModal(payload) {
  return {
    type: constants.TOGGLE_OTP_MODAL,
    payload
  }
}
export function logoutAction(payload) {
  return {
    type: constants.LOGOUT_ACTION,
    payload
  }
}
export function getAccountDetails(payload) {
  
  return {
    type: constants.GET_ACCOUNT_DETAILS,
    payload
  }
}
export function getCountryBasedOnIp() {
  return {
    type: constants.GET_COUNTRY_BASED_ON_IP
  }
}
export function foreignRegisteration(payload) {
  return {
    type: constants.FOREIGN_REGISTERATION_ACTION,
    payload
  }
}
export function generalSigninAction(payload) {
  return {
    type: constants.GENERAL_SIGIN_ACTION,
    payload
  }
}
export function getUserStoreInfo(payload) {
  return {
    type: constants.GET_USER_STORE_INFO,
    payload
  }
}
export function verifyEmailAction(payload) {
  return {
    type: constants.VERIFY_EMAIL,
    payload
  }
}