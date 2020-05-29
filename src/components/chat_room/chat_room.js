import React, { Component } from 'react'

export default class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatRoom: null
    }
  }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.chatRoom) {
  //     const propsChatRoom = nextProps.chatRoom.toJS();
  //     if (JSON.stringify(prevState.chatRoom) !== JSON.stringify(propsChatRoom)) {
  //       nextProps.getChatRoomMsg(propsChatRoom.id);
  //     }
  //   } else {
  //     return prevState;
  //   }
  // }
  sendMessage = (chatObj, userId) => {
    let message = this.mssageText.value;
    const data = {
      "chat_id": chatObj.id,
      "sender_user_id": userId,
      "sender_user_name": "Rajib C",
      "sender_user_avatar": "http://sfsdfsdf.com/abc.jpg",
      "receiver_user_id": "2",
      "receiver_user_name": "Rajiv Pandey",
      "receiver_user_avatar": "http://sfsdfsdf.com/xyz.jpg",
      "message": message
    }
    this.props.sendMsg({ data });
  }
  render() {
    let msg = [];
    let chatObj = null;
    let userId = localStorage.getItem('userId');
    if (this.props.chatRoom) {
      chatObj = this.props.chatRoom.toJS();
      msg = this.props.chatRoomMsg.toJS()[chatObj.id] ? this.props.chatRoomMsg.toJS()[chatObj.id] : [];
      console.log('msg', msg);
    }
    return (
      <>
        <div style={chatObj ? { display: 'block' } : { display: 'none' }}>
          <ul>
            {
              msg.map(item => {
                let color = item.sender_user_id == userId ? 'green' : 'blue';
                return (<li style={{ color }}>{item.message}</li>)
              })
            }
          </ul>
          <input type="textarea" ref={ref => this.mssageText = ref} />
          <button onClick={() => this.sendMessage(chatObj, userId)}>Send</button>
        </div>
      </>
    )
  }
}
