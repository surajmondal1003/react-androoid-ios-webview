import request from '../../../utils/config/request';

export const updateProfileImageApi = (payload) => {
  const options = {
    method: 'put',
    params: payload,
    isLoader: true
  }
  return request(`/api/user/v1/profile/profile-image`, options, true)
}
export const updatePasswordApi = (payload) => {
  const options = {
    method: 'put',
    params: payload,
    isLoader: true
  }
  return request(`/api/user/v1/profile/update-password`, options, true)
}
export const changePasswordApi = (payload) => {
  const options = {
    method: 'put',
    params: payload,
    isLoader: true
  }
  return request(`/api/user/v1/profile/reset-password`, options, true)
}
export const updateProfileApi = (payload) => {
  const options = {
    method: 'put',
    params: payload.data,
    isLoader: true
  }
  return request(`/api/user/v1/profile/${payload.type}`, options, true)
}

export const verfiyProfileOtpApi = (payload) => {
  const options = {
    method: 'post',
    params: payload.data,
    isLoader: true
  }
  return request(`/api/user/v1/profile/verify-otp-set-phone`, options, true)
}