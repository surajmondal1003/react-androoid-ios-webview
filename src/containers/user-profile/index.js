import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserProfile from "./user-profile";
import * as actions from './state/actions';
import { updateFullScreenLoaderState } from "../full-page-loader/state/actions";

const mapStateToProps = state => {
  return {
    userDetails: state.userReducer.get('userDetails')
  }
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateProfileImage: actions.updateProfileImageAction,
      updateFullScreenLoaderState,
    },
    dispatch
  );
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserProfile)
);
