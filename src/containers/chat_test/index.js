import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from './state/actions';
import { storeChatUserList } from '../user-profile/state/actions';
import Chat from "./chat";
import { updateFullScreenLoaderState } from "../../containers/full-page-loader/state/actions";


const mapStateToProps = state => {
  return {
    userDetails: state.userReducer.get('userDetails'),
    chatUserList: state.userReducer.get('chatUserList'),
  };
  // return {
  //   chatList: state.chatReducer.get('chatList')
  // };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getChatList: actions.getChatList,
      storeChatRoom: actions.storeChatRoom,
      createChatRoom: actions.createChatRoom,
      getChatRoomMsg: actions.getChatRoomMsg,
      storeChatUserList: storeChatUserList,
      updateFullScreenLoaderState: updateFullScreenLoaderState
    },
    dispatch
  );
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Chat)
);
