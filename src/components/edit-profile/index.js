import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from '../../containers/user-profile/state/actions'
import EditProfile from './edit-profile';

const mapStateToProps = state => {
  return {
    userDetails: state.userReducer.get('userDetails'),
    modalState: state.userReducer.get('profileModal')
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updatePassword: actions.updatePasswordAction,
      changePassword: actions.changePasswordAction,
      updateProfile: actions.updateUserProfile
    },
    dispatch
  );
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditProfile)
);


