import * as constants from './constants';

export function getStoreListFromSearch(payload) {
  payload.type = payload.type || 'initial';
  payload.via = payload.via || 'search';
  return {
    type: constants.GET_STORE_SEARCH_LIST,
    payload
  }
}
export function getHotCategories() {
  return {
    type: constants.GET_HOT_CATEGORIES,
  }
}

export function getStoreSearchCategoryList(payload){
  return {
    type: constants.GET_STORE_SEARCH_CATEGORY_LIST,
    payload
  }
}
