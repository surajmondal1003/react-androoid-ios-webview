import * as constants from './constants';

export function gettStoreProfilePageDetails(payload) {
  return {
    type: constants.GET_STORE_PROFILE_PAGE_DETAILS,
    payload
  }
}
export function getStoreComplianceDetails(payload) {
  return {
    type: constants.GET_STORE_COMPLIANCE_DETAILS,
    payload
  }
}
export function submitStoreComplianceForm(payload) {
  console.log('payload_action', payload)
  return {
    type: constants.SUBMIT_COMPLIANCE_FORM_ACTION,
    payload
  }
}
export function submitStoreDeliveryAttr(payload) {
  return {
    type: constants.SUBMIT_STORE_DELIVERY_ATTRIBUTE,
    payload
  }
}
export function submitStoreOperation(payload) {
  return {
    type: constants.SUBMIT_STORE_OPERATION,
    payload
  }
}
export function updateStoreBasicDetails(payload) {
  return {
    type: constants.UPDATE_STORE_BASIC_DETAILS,
    payload
  }
}
export function storeStoreCompliance(payload) {
  return {
    type: constants.STORE_STORE_COMPLIANCE_DETAILS,
    payload
  }
}

export function getBusinessCategoryList(payload) {
  return {
    type: constants.GET_BUSINESS_CATEGORY_LIST,
    payload
  }
}

export function referStoreAction(payload,fromWeb) {
  return {
    type: constants.STORE_REFER_ACTION,
    payload,
    fromWeb
  }
}