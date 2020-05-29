import { fork, put, takeLatest, select, takeLeading } from 'redux-saga/effects'

import * as constants from './constants'
import * as api from './api';
import { showMessagePopup } from '../../message-popup/state/actions';
import { store, history } from '../../../utils/config/app_config';

function* getChatList({ payload }) {
  try {
    const response = yield api.getChatListApi(payload);
    if (response) {
      yield put({ type: constants.STORE_CHAT_LIST, payload: response });
    }
  } catch (e) { }
}
function* sendMsg({ payload }) {
  try {
    const response = yield api.sendMsgApi(payload.data)
    if (response) {
      yield put({ type: constants.STORE_CHAT_ROOM_MSG, payload: { data: response, type: 'new', chatId: payload.data.chat_id } });
    }

  } catch (e) {
    // console.log(e)
  }
}

function* createChat({ payload }) {
  try {
    const response = yield api.createChatRoomApi(payload.data);
    if (response) {
      yield put({ type: constants.STORE_CHAT_ROOM, payload: response });
    }
  } catch (e) { }
}
function* getChatRoomMsg({ payload }) {
  try {
    const response = yield api.getChatRoomMessageApi(payload);
    if (response) {
      yield put({ type: constants.STORE_CHAT_ROOM_MSG, payload: { data: response, type: 'existing', chatId: payload.chatId } });
    }
  } catch (e) { }
}
export default function* ChatSaga() {
  yield takeLeading(constants.SEND_MESSAGE, sendMsg);
  yield takeLeading(constants.GET_CHAT_LIST, getChatList);
  yield takeLeading(constants.CREATE_CHAT_ROOM, createChat);
  yield takeLeading(constants.GET_CHAT_ROOM_MSG, getChatRoomMsg)
  // yield takeLeading(constants.SEND_MESSAGE_SELLER, sendMsgSeller);
  // yield takeLeading(constants.RECIEVE_MESSAGE_SELLER, recieveMsgSeller);
}