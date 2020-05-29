import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ChatRoom from "./chat_room";
import { getChatRoomMsg, sendMsg } from "../../containers/chat_test/state/actions";

const mapStateToProps = state => {
  return {
    chatRoom: state.chatReducer.get('chatRoom'),
    chatRoomMsg: state.chatReducer.get('chatRoomMsg')
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getChatRoomMsg,
      sendMsg
    },
    dispatch
  );
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChatRoom)
);
