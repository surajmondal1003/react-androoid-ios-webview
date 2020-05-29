import { fork, put, takeLatest, select, takeLeading } from 'redux-saga/effects'

import * as constants from './constants'
import * as api from './api'
import { store, history } from '../../../utils/config/app_config';
import { showMessagePopup } from '../../../containers/message-popup/state/actions';
import { updateFullScreenLoaderState } from '../../../containers/full-page-loader/state/actions';


function* getZone({ payload }) {
  try {
    const response = yield api.getZoneApi(payload);
    console.log(payload)
    if (response) {
      const storePayload =
      // { "area_flag": false, "radius": "", "zone_code": "kolkata", "area_code": "Howrah", "latitude": "22.588179", "longitude": "88.087736", "from": 0, "size": 1 }
      {
        "area_flag": false, "radius": `${payload.radius}`,
        "zone_code": `${response.obj[0].zone}`, "area_code": `${response.obj[0].area}`,
        "latitude": `${payload.lat}`, "longitude": `${payload.long}`,
        "categories": [], "addressOrName": "*", "from": 0, "size": 10, "businessCategoryId": null
      }

      // { "area_flag": false, "radius": "", "zone_code": `${response.obj[0].zone}`, "area_code": `${response.obj[0].area}`, "latitude": `${payload.lat}`, "longitude": `${payload.long}`, "from": 0, "size": 1 }
      yield put({ type: constants.GET_STORE_LIST_FROM_ZONE, payload: { query: storePayload, type: 'initial', via: 'normal' } });
      yield put({ type: constants.STORE_USER_CURRENT_LOCATION, payload });
      yield put({ type: constants.GET_STORE_CATEGORY_LIST, payload: { query: storePayload, type: 'initial', via: 'normal' } });
    }
  } catch (e) {

  }
}
function* getStoreList({ payload }) {
  try {
    const response = yield api.getStoreListApi(payload);
    if (response) {
      yield put({ type: constants.STORE_STORE_LIST_FROM_ZONE, payload: { data: response, type: payload.type, query: payload.query, via: payload.via } });
    }
  } catch (e) { }
}
function* getStoreCategory({ payload }) {
  try {
    const response = yield api.getStoreCategoryApi(payload);
    if (response) {
      yield put({ type: constants.STORE_STORE_CATEGORY_LIST_ZONE, payload: { data: response, type: payload.type, query: payload.query, via: payload.via } });
    }
  } catch (e) { }
}

function* getDemoStoreList({ payload }) {
  try {
    const response = yield api.getDemoStoreListApi(payload);
    if (response) {
      yield put({ type: constants.STORE_DEMO_STORE_LIST, payload: response });
    }
  } catch (e) { }
}

export default function* HomeSaga() {
  yield takeLeading(constants.GET_ZONE_FROM_LAT_LONG, getZone);
  yield takeLeading(constants.GET_STORE_LIST_FROM_ZONE, getStoreList);
  yield takeLeading(constants.GET_STORE_CATEGORY_LIST, getStoreCategory);
  yield takeLeading(constants.GET_DEMO_STORE_LIST, getDemoStoreList)
}