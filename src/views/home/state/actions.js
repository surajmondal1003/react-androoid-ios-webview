import * as constants from './constants';

export function getZoneFromLatLong(payload) {
  console.log(payload);
  return {
    type: constants.GET_ZONE_FROM_LAT_LONG,
    payload
  }
}
export function getStoreListFromZone(payload) {
  payload.type = payload.type || 'initial'
  payload.via = payload.via || 'normal'
  return {
    type: constants.GET_STORE_LIST_FROM_ZONE,
    payload
  }
}

export function getDemoStoreList(payload) {
  return {
    type: constants.GET_DEMO_STORE_LIST,
    payload
  }
}