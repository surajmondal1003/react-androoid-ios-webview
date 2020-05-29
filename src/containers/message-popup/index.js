import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from './state/actions';
import MessagePopup from "./message-popup";

const mapStateToProps = state => {
  return {
    messages: state.messagePopupReducer
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      dismissMessage: actions.dismissMessgaePopup
    },
    dispatch
  );
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MessagePopup)
);
