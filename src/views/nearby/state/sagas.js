import { fork, put, takeLatest, select, takeLeading } from 'redux-saga/effects'

import * as constants from './constants'
import * as api from './api'
import { store, history } from '../../../utils/config/app_config';
import { showMessagePopup } from '../../../containers/message-popup/state/actions';
import { updateFullScreenLoaderState } from '../../../containers/full-page-loader/state/actions';

function* getStoreSearch({ payload }) {
  try {
    const response = yield api.getStoreSearchApi(payload);
    if (response) {
      yield put({ type: constants.STORE_SEARCH_LIST, payload: { data: response, fromAction: payload } });
    }
  } catch (e) { }
}
function* getStoreSearchCategory({ payload }) {
  try {
    const response = yield api.storeSearchCategoryListApi(payload);
    if (response) {
      yield put({ type: constants.STORE_STORE_SEARCH_CATEGORY_LIST, payload: { data: response, fromAction: payload } });
    }
  } catch (e) { }
}

function* getHot() {
  try {
    const response = yield api.getHotCategoriesApi();
    if (response) {
      yield put({ type: constants.STORE_HOT_CATEGORIES, payload: response.payload });
    }
  } catch (e) { }
}
export default function* StoreSearchSaga() {
  yield takeLeading(constants.GET_STORE_SEARCH_LIST, getStoreSearch);
  yield takeLeading(constants.GET_HOT_CATEGORIES, getHot);
  yield takeLeading(constants.GET_STORE_SEARCH_CATEGORY_LIST, getStoreSearchCategory)
}