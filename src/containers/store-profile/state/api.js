import request from '../../../utils/config/request';

export const getStoreProfileDetailsApi = (payload) => {
  const options = {
    method: 'post',
    params: payload,
    isLoader: true
  }
  return request(`/api/search/store/store-details`, options, true)
}
export const getStoreComplianceDetailsApi = (payload) => {
  const options = {
    method: 'get',
    params: {},
    isLoader: true
  }
  return request(`/api/store-management/app/store-compliance/${payload.complianceId}`, options, true)
}
export const submitCompliantDetailsApi = (payload) => {
  const options = {
    method: 'post',
    params: payload,
    // isLoader: true
  }
  return request(`/api/store-management/app/store-compliance`, options, true)
}
export const submitStoreDeliveryApi = (payload) => {
  const options = {
    method: 'post',
    params: payload,
    isLoader: true
  }
  return request(`/api/store-management/app/store/delivery-attribute`, options, true)
}
export const submitStoreOperateApi = (payload) => {
  const options = {
    method: 'post',
    params: payload,
    isLoader: true
  }
  return request(`/api/store-management/app/store/store-operation`, options, true)
}
export const updateStoreBasicApi = (payload) => {
  const options = {
    method: 'post',
    params: payload,
    isLoader: true
  }
  return request(`/api/store-management/app/store/request`, options, true)
}

export const getBusinessCategoryApi = () => {
  const options = {
    method: 'get'
  }
  return request(`/api/category/admin-api/business-categories`, options, false)
}

export const referStoreApi = (payload) => {
  const options = {
    method: 'post',
    params: payload,
    isLoader: true
  }
  return request(`/api/shopping-ms/refer_stores`, options, false)
}