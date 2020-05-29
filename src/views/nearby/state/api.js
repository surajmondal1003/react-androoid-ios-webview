import request from '../../../utils/config/request';

export const getStoreSearchApi = (payload) => {
  console.log('via', payload.via);
  const options = {
    method: 'post',
    params: payload.query,
    isLoader: payload.via === 'autoComplete' || payload.type === 'pagination' ? false : true,
    isSearch: true
  }
  return request(`/store/search`, options, false)
}
export const getHotCategoriesApi = () => {
  const options = {
    method: 'get',
    params: {},
  }
  return request(`/api/category/admin-api/hot-categories?pageSize=100000`, options)
}
export const storeSearchCategoryListApi = (payload) => {
  const options = {
    method: 'post',
    params: payload.query,
    isLoader: false,
    isSearch: true
  }
  return request(`/store/search/business-category`, options, false)
}