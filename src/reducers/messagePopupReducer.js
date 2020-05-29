import { fromJS } from "immutable";
import { createReducerFromObject } from "../utils/miscellaneous/reducerUtils";
import { SHOW_MESSAGE_POPUP, DISMISS_MESSGAE_POPUP } from "../containers/message-popup/state/constants";

const initialState = fromJS([]);

const countryRegionReducerFunction = {
  [SHOW_MESSAGE_POPUP]: (state, payload) => {
    return fromJS([{
      id: Date.now(),
      body: payload.body,
      visible: payload.visible,
      type: payload.type,
      position: payload.position ? payload.position : 'topRight'
    }])
  },
  [DISMISS_MESSGAE_POPUP]: (state, payload) => fromJS([])

};


const messagePopupReducer = createReducerFromObject(
  countryRegionReducerFunction,
  initialState
);
export default messagePopupReducer;
