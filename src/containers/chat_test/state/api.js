import request from "../../../utils/config/request";

export const sendMsgApi = payload => {
  const options = { method: 'post', params: payload, isLoader: true, }
  return request(`/api/communication_ms/chats/${payload.chat_id}/messages`, options, true)
}
export const getChatListApi = payload => {
  const options = { method: 'get', params: {} };
  return request('/api/communication_ms/chats', options, true);
}
export const createChatRoomApi = payload => {
  const options = { method: 'post', params: payload, isLoader: true }
  return request('/api/communication_ms/chats', options, true)
}
export const getChatRoomMessageApi = payload => {
  const options = { method: 'get', params: {} };
  return request(`/api/communication_ms/chats/${payload.chatId}/messages`, options, true);
}
