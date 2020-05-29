import { fromJS } from "immutable";
import { createReducerFromObject } from "../utils/miscellaneous/reducerUtils";
import { STORE_CHAT_ROOM_MSG, STORE_CHAT_LIST, STORE_CHAT_ROOM } from "../containers/chat_test/state/constants";

const initialState = fromJS({
  chatRoomMsg: {},
  chatList: [],
  chatRoom: null
});

const reducerFunction = {
  [STORE_CHAT_ROOM_MSG]: (state, payload) => {
    let prevState = state.get('chatRoomMsg').toJS();
    let roomSpecificMsg = prevState[payload.chatId];
    // 'new' defines a new chat that has been started, 'existing' defines chat from history.
    if (payload.type === 'new' && roomSpecificMsg) {
      prevState[payload.chatId] = roomSpecificMsg.concat(payload.data);
    } else {
      prevState[payload.chatId] = [].concat(payload.data);
    }
    console.log('prevState', prevState);
    const newState = state.set('chatRoomMsg', fromJS(prevState));
    return newState;
  },
  [STORE_CHAT_LIST]: (state, payload) =>
    state.set('chatList', fromJS(payload)),
  [STORE_CHAT_ROOM]: (state, payload) =>
    state.set('chatRoom', fromJS(payload))
};


const chatReducer = createReducerFromObject(
  reducerFunction,
  initialState
);
export default chatReducer;
