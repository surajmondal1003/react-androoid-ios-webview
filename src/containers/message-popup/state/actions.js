import { SHOW_MESSAGE_POPUP, DISMISS_MESSGAE_POPUP } from "./constants";

export function showMessagePopup(payload) {
  return {
    type: SHOW_MESSAGE_POPUP,
    payload
  }
}
export function dismissMessgaePopup(payload) {
  return {
    type: DISMISS_MESSGAE_POPUP,
    payload
  }
}