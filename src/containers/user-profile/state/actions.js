import * as constants from './constants';

export function updateProfileImageAction(payload) {
  return {
    type: constants.UPDATE_PROFILE_IMAGE,
    payload
  }
}
export function updatePasswordAction(payload) {
  return {
    type: constants.UPDATE_PASSWORD,
    payload
  }
}
export function changePasswordAction(payload) {
  return {
    type: constants.CHANGE_PASSWORD,
    payload
  }
}
export function toggleProfileModal(payload) {
  return {
    type: constants.TOOGLE_PROFILE_MODAL_STATE,
    payload
  }
}
export function updateUserProfile(payload) {
  return {
    type: constants.UPDATE_USER_PROFILE,
    payload
  }
}
export function verifyProfileOtp(payload) {
  return {
    type: constants.VERIFY_OTP_USER_PROFILE,
    payload
  }
}
export function storeChatUserList(payload) {
  return {
    type: constants.STORE_CHAT_USER_LIST,
    payload
  }
}