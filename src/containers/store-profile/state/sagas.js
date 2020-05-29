import { fork, put, takeLatest, select, takeLeading } from 'redux-saga/effects'

import * as constants from './constants'
import * as api from './api'
import { store, history } from '../../../utils/config/app_config';
import { updateFullScreenLoaderState } from '../../full-page-loader/state/actions';
import { showMessage } from '../../../utils/miscellaneous/messageLib';
import { getFileFromUrl } from '../../../utils/miscellaneous/awsLib';


function getStoreProfilePayload() {
  return (JSON.parse(sessionStorage.getItem('storeProfilePayload')));
}
function* getStoreProfileDetail({ payload }) {
  try {
    console.log(payload);
    sessionStorage.setItem('storeProfilePayload', JSON.stringify(payload))
    const response = yield api.getStoreProfileDetailsApi(payload);
    if (response) {
      yield put({ type: constants.STORE_STORE_PROFILE_PAGE_DETAILS, payload: response.obj[0] });
    }
  } catch (e) {

  }
}
function* getStoreComplianceDetails({ payload }) {
  try {

    const response = yield api.getStoreComplianceDetailsApi(payload);
    if (response) {
      if (response.obj[0].data) {
        let res = response.obj[0];
        let tempData = JSON.parse(res.data);
        let data = JSON.parse(tempData);
        console.log('data', JSON.parse(tempData), typeof tempData, data.certificateUrl);
        getFileFromUrl(data.certificateUrl).then(fileObj => {
          data['fileObj'] = fileObj;
          res.data = data;
          store.dispatch({ type: constants.STORE_STORE_COMPLIANCE_DETAILS, payload: { data: res, type: payload.type } })
        })
      }
    }
  } catch (e) {
  }
}
function* submitComplianceDetails({ payload }) {
  try {
    console.log('payload_saga', payload)
    const response = yield api.submitCompliantDetailsApi(payload.data);
    if (response.responseStatus == 'OK') {
      showMessage(`${payload.data.complianceType} updated`, 'success');
      setTimeout(() => {
        store.dispatch({ type: constants.GET_STORE_PROFILE_PAGE_DETAILS, payload: getStoreProfilePayload() })
      }, 500);
      setTimeout(() => {
        store.dispatch({ type: constants.STORE_STORE_COMPLIANCE_DETAILS, payload: { data: null, type: payload.type } })
      }, 700);

    }
  } catch (e) {

  }
}
function* submitStoreDelivery({ payload }) {
  try {
    const response = yield api.submitStoreDeliveryApi(payload);
    if (response) {
      showMessage(`Delivery updated`, 'success');
      setTimeout(() => {
        store.dispatch({ type: constants.GET_STORE_PROFILE_PAGE_DETAILS, payload: getStoreProfilePayload() })
      }, 500);
    }
  } catch (e) {

  }
}
function* submitStoreOperate({ payload }) {
  try {
    const response = yield api.submitStoreOperateApi(payload);
    if (response) {
      showMessage(`Store Time updated`, 'success');
      setTimeout(() => {
        store.dispatch({ type: constants.GET_STORE_PROFILE_PAGE_DETAILS, payload: getStoreProfilePayload() })
      }, 500);
    }
  } catch (e) {
  }
}

function* updateStoreBasic({ payload }) {
  try {
    const response = yield api.updateStoreBasicApi(payload);
    if (response) {
      showMessage(`Update request sent`, 'success');
      setTimeout(() => {
        store.dispatch({ type: constants.GET_STORE_PROFILE_PAGE_DETAILS, payload: getStoreProfilePayload() })
      }, 500);
    }
  } catch (e) {
  }
}
function* getBusinessCategory({ payload }) {
  try {
    const response = yield api.getBusinessCategoryApi(payload);
    if (response) {
      yield put({ type: constants.STORE_BUSINESS_CATEGORY_LIST, payload: response.payload });
    }
  } catch (e) {

  }
}

function* referStore({ payload, fromWeb }) {
  try {
    const response = yield api.referStoreApi(payload);

    if (response) {
      showMessage(`Thanks for refering this store to us, we will try to get in touch with them.`, 'success');
      console.log(fromWeb)
      if (fromWeb) {
        console.log('from web')
        history.goBack();
      }
      else {
        console.log('from native')
        if (window.TestAndroid) {
          window.TestAndroid.goBackToApa(true)
        }
        if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.goBackToApa) {
          window.webkit.messageHandlers.goBackToApa.postMessage(true);
        }
      }
      yield put({ type: constants.TOGGLE_STORE_REFER_MODAL, payload: { open: false, data: null } })
    }
  } catch (e) { }
}

export default function* StoreProfileSaga() {
  yield takeLeading(constants.GET_STORE_PROFILE_PAGE_DETAILS, getStoreProfileDetail);
  yield takeLeading(constants.GET_STORE_COMPLIANCE_DETAILS, getStoreComplianceDetails);
  yield takeLeading(constants.SUBMIT_COMPLIANCE_FORM_ACTION, submitComplianceDetails);
  yield takeLeading(constants.SUBMIT_STORE_DELIVERY_ATTRIBUTE, submitStoreDelivery);
  yield takeLeading(constants.SUBMIT_STORE_OPERATION, submitStoreOperate);
  yield takeLeading(constants.UPDATE_STORE_BASIC_DETAILS, updateStoreBasic);
  yield takeLeading(constants.GET_BUSINESS_CATEGORY_LIST, getBusinessCategory);
  yield takeLeading(constants.STORE_REFER_ACTION, referStore)




}