import { fork, put, takeLatest, select, takeLeading } from 'redux-saga/effects'

import * as constants from './constants'
import * as api from './api'
import { store, history } from '../../../utils/config/app_config';
import { updateFullScreenLoaderState } from '../../full-page-loader/state/actions';
import { showMessage } from '../../../utils/miscellaneous/messageLib';
import { GET_ACCOUNT_DETAILS, TOGGLE_OTP_MODAL } from '../../../views/login/state/constants';


function* updateProfileImage({ payload }) {
  try {
    console.log('i -saha')
    const response = yield api.updateProfileImageApi(payload);
    if (response) {
      showMessage('Profile image updated', 'success');
      yield put({ type: constants.STORE_PROFILE_IMAGE_AFTER_UPDATE, payload });
    }
  } catch (e) {

  }
}
function* updatePassword({ payload }) {
  try {
    const response = yield api.updatePasswordApi(payload);
    if (response) {
      showMessage('Password set', 'success');
      yield put({ type: constants.TOOGLE_PROFILE_MODAL_STATE, payload: { open: false } })
      yield put({ type: GET_ACCOUNT_DETAILS });
    }
  } catch (e) {

  }
}
function* changePassword({ payload }) {
  try {
    const response = yield api.changePasswordApi(payload);
    if (response) {
      showMessage('Password updated', 'success');
      yield put({ type: constants.TOOGLE_PROFILE_MODAL_STATE, payload: { open: false } })
      yield put({ type: GET_ACCOUNT_DETAILS });
    }
  } catch (e) {

  }
}
function* updateProfile({ payload }) {
  try {
    const response = yield api.updateProfileApi(payload);
    if (response) {
      if (payload.type == 'phone') {
        yield put({ type: TOGGLE_OTP_MODAL, payload: { open: true, data: payload.forStore } });
      } else {
        yield put({ type: GET_ACCOUNT_DETAILS });
      }
      // showMessage('Password updated', 'success');
      // yield put({ type: constants.TOOGLE_PROFILE_MODAL_STATE, payload: { open: false } })
    }
  } catch (e) {

  }
}
function* otpVerfiyProfile({ payload }) {
  const response = yield api.verfiyProfileOtpApi(payload.data);
  if (response) {
    yield put({ type: TOGGLE_OTP_MODAL, payload: { open: false, data: payload.forStore } });
    yield put({ type: GET_ACCOUNT_DETAILS });
  }
}

export default function* UserProfileSaga() {
  yield takeLeading(constants.UPDATE_PROFILE_IMAGE, updateProfileImage);
  yield takeLeading(constants.UPDATE_PASSWORD, updatePassword);
  yield takeLeading(constants.CHANGE_PASSWORD, changePassword);
  yield takeLeading(constants.UPDATE_USER_PROFILE, updateProfile);
  yield takeLeading(constants.VERIFY_OTP_USER_PROFILE, otpVerfiyProfile)
}