import request from '../../../utils/config/request';
import { history } from '../../../utils/config/app_config';

export const getZoneApi = (payload) => {
  const options = {
    method: 'post',
    params: { "latitude": payload.lat, "longitude": payload.long },
    // history.location.pathname == '/' ? false :
    isLoader: true,
    isSearch: true
  }
  // return request(`/api/search/store/find-zone-area?latitude=${payload.lat}&longitude=${payload.long}`, options)
  return request(`/store/find-zone-area`, options, false)
}
export const getStoreListApi = (payload) => {
  const options = {
    method: 'post',
    params: payload.query,
    isLoader: payload.type === 'pagination' ? false : true,
    isSearch: true
  }
  // return request(`/api/search/store/v2/store`, options, false)
  return request(`/store/search`, options, false)

}
export const getStoreCategoryApi = (payload) => {
  const options = {
    method: 'post',
    params: payload.query,
    isLoader: false,
    isSearch: true
  }
  // return request(`/api/search/store/v2/store-category`, options, false)
  return request(`/store/search/business-category`, options, false)

}
export const getStoreMapListApi = (payload) => {
  const options = {
    method: 'post',
    params: payload.mapQuery,
    isSearch: true
  }
  // return request(`/api/search/store/v2/store-map`, options, false)
  return request(`/store/list`, options, false)

}

export const getDemoStoreListApi = (payload) => {
  const options = {
    method: 'post',
    params: payload.query,
    isLoader: true,
    isSearch: true
  }
  return request(`/store/search/demo`, options, false)

}