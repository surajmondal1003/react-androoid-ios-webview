import { store } from "../config/app_config";
import { showMessagePopup } from "../../containers/message-popup/state/actions";

export function showMessage(body, type) {
  console.log(body,type)
  // store.dispatch(
  //   showMessagePopup({
  //     body,
  //     type
  //   })
  // )
  if (window.TestAndroid) {
    window.TestAndroid.onProfileUpdated(body,type)
  }
  if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.onProfileUpdated) {
    window.webkit.messageHandlers.onProfileUpdated.postMessage(body,type);
  }
}