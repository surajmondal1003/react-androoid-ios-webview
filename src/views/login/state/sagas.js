import { fork, put, takeLatest, select, takeLeading } from 'redux-saga/effects'

import * as constants from './constants'
import * as api from './api'
import { store, history } from '../../../utils/config/app_config';
import { showMessagePopup } from '../../../containers/message-popup/state/actions';
import { showMessage } from '../../../utils/miscellaneous/messageLib';
// import { STORE_ON_SWIPED_UP } from '../../home/state/constants';

function* loginSuccess(response, via) {
  localStorage.setItem('apa-2-token', response.auth_token.token);
  localStorage.setItem('id', response.id);
  localStorage.setItem('name', response.name ? response.name : response.phone);
  localStorage.setItem('photoUrl', response.profile_image);
  const isSeller = response.roles.includes('SELLER');
  response.isSeller = isSeller;

  yield put({ type: constants.STORE_USER_DETAILS, payload: response });
  if (via !== 'refresh')
    history.replace('/');
  if (isSeller)
    yield put({ type: constants.GET_USER_STORE_INFO, payload: { userId: response.id } });
 
}
function* getOtp({ payload }) {
  try {
    const response = yield api.getLoginOtpApi(payload.data);
    if (response) {
      const data = Object.assign({}, payload.forStore, response);
      yield put({ type: constants.TOGGLE_OTP_MODAL, payload: { open: true, data } });
      // store.dispatch(
      //   showMessagePopup({
      //     message: response.message,
      //     body: response.message,
      //     visible: true,
      //     type: 'success',
      //     color: '#e53e3d',
      //   })
      // );
    }
  } catch (e) { }
}
function* submitOtp({ payload }) {
  try {
    const response = yield api.submitLoginOtpApi(payload.data);
    if (response) {
      yield loginSuccess(response);
      yield put({ type: constants.TOGGLE_OTP_MODAL, payload: { open: false, data: payload.forStore } });
    }
  } catch (e) { }
}
function* getAccDetails({ payload }) {
  try {
    const response = yield api.getAccountDetailsApi();
    if (response) {
      yield loginSuccess(response, 'refresh');
    }
  } catch (e) { }
}
function* onLogout() {
  try {
    const response = yield api.logoutApi();
    yield onLogoutSucess();
  } catch (e) { }
}
function* getIpBasedCountry() {
  try {
    const response = yield api.getIpBasedCountryApi();
    if (response) {
      yield put({ type: constants.STORE_COUNTRY_BASED_ON_IP, payload: response.countryList[0] });
    }
  } catch (e) { }
}
function* foreignRegisteration({ payload }) {
  try {
    const response = yield api.foreignRegisterApi(payload);
    if (response) {
      yield loginSuccess(response);
    }
  } catch (e) { }
}
function* generalSignin({ payload }) {
  try {
    const response = yield api.generalSigninApi(payload);
    if (response) {
      yield loginSuccess(response);
    }
  } catch (e) { }
}
function* getUserStoreInfo({ payload }) {
  try {
    const response = yield api.getUserStoreInfoApi();
    if (response) {
      if (response.obj[0].sourceAsMap) {
        yield put({ type: constants.STORE_USER_STORE_INFO, payload: response.obj[0].sourceAsMap });
       
      }
    }
  } catch (e) { }
}
function* verifyEmail({ payload }) {
  try {
    const response = yield api.verifyEmailApi(payload);
    if (response) {
      showMessage('Email verified successfully', 'success');
      // history.replace('/');
    }
  } catch (e) { }
}
function* onLogoutSucess() {
  try {
    localStorage.removeItem('apa-2-token');
    localStorage.removeItem('apa-2-location');
    localStorage.removeItem('ls');
    yield put({ type: constants.STORE_USER_DETAILS, payload: null });
    // yield put({ type: STORE_ON_SWIPED_UP, payload: 0 });
    history.replace('/login');
  } catch (e) { }
}

export default function* LoginSaga() {
  yield takeLeading(constants.GET_OTP_LOGIN, getOtp);
  yield takeLeading(constants.SEND_OTP_LOGIN, submitOtp);
  yield takeLeading(constants.LOGOUT_ACTION, onLogout);
  yield takeLeading(constants.GET_ACCOUNT_DETAILS, getAccDetails);
  yield takeLeading(constants.GET_COUNTRY_BASED_ON_IP, getIpBasedCountry);
  yield takeLeading(constants.FOREIGN_REGISTERATION_ACTION, foreignRegisteration);
  yield takeLeading(constants.GENERAL_SIGIN_ACTION, generalSignin);
  yield takeLeading(constants.GET_USER_STORE_INFO, getUserStoreInfo);
  yield takeLeading(constants.VERIFY_EMAIL, verifyEmail);
  yield takeLeading(constants.ON_SUCCESS_LOGOUT, onLogoutSucess);

}