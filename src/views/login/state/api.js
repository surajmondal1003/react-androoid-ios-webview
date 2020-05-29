import request from '../../../utils/config/request';
import { BrowserInfo } from '../../../utils/miscellaneous/browserData';

const { browser } = BrowserInfo.init();

const deviceInfo = {
  "mobile_no": "", "geocode": "",
  "location": "some location", "ip": "1",
  "make": browser.name,
  "mac_id": "1",
  "os": navigator.platform,
  "app_version": "v1.0.0",
  "rooted": "no",
  "imei": "1",
  "device_id": browser.version.toString(),
  "platform": "web",
  "push_id": localStorage.getItem('ls') ? localStorage.getItem('ls') : "1234"
}

export const getLoginOtpApi = (payload) => {
  const options = {
    method: 'post',
    params: payload,
  }
  return request('/api/user/v1/simple_signup/send_otp', options, false)
}
export const submitLoginOtpApi = (payload) => {
  deviceInfo.push_id = localStorage.getItem('ls') ? localStorage.getItem('ls') : "1234";
  const options = {
    method: 'post',
    params: payload,
    deviceInfo
  }
  return request('/api/user/v1/simple_signup/verify-otp', options, false, true)
}

export const logoutApi = () => {
  const options = {
    method: 'delete',
    params: {},
    isLoader: true
  }
  return request('/api/v1/session', options, true)
}
export const getAccountDetailsApi = () => {
  console.log('caleed')
  const options = {
    method: 'get',
    isLoader: true
  }
  return request('/api/v1/session/my_identity', options, true)
}
export const getIpBasedCountryApi = () => {
  const options = {
    method: 'get'
  }
  return request('/api/user/v1/simple_signup/country-list', options, false)
}
export const foreignRegisterApi = (payload) => {
  deviceInfo.push_id = localStorage.getItem('ls') ? localStorage.getItem('ls') : "1234";
  const options = {
    method: 'post',
    params: payload,
    deviceInfo
  }
  return request('/api/user/v1/simple_signup/user-registration', options, false, true)
}
export const generalSigninApi = (payload) => {
  deviceInfo.push_id = localStorage.getItem('ls') ? localStorage.getItem('ls') : "1234";
  const options = {
    method: 'post',
    params: payload,
    deviceInfo
  }
  return request('/api/v1/session/signin', options, false, true)
}
export const getUserStoreInfoApi = () => {
  const options = {
    method: 'get',
    params: {},
  }
  return request('/api/search/store/store-user', options, true)
}
export const verifyEmailApi = (payload) => {
  const options = {
    method: 'get',
    params: {},
  }
  return request(`/api/user/v1/simple_signup/active-account?token=${payload.token}`, options, false)
}