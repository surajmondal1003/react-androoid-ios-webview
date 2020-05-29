import * as constants from './constants';

export function sendMsg(payload) {
  return {
    type: constants.SEND_MESSAGE,
    payload
  }
}
export function getChatList(payload) {
  return {
    type: constants.GET_CHAT_LIST,
    payload
  }
}
export function createChatRoom(payload) {
  return {
    type: constants.CREATE_CHAT_ROOM,
    payload
  }
}
export function storeChatRoom(payload) {
  return {
    type: constants.STORE_CHAT_ROOM,
    payload
  }
}
export function getChatRoomMsg(payload) {
  return {
    type: constants.GET_CHAT_ROOM_MSG,
    payload
  }
}