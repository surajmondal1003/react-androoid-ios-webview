import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ChangePassword from './change-password';
import { toggleProfileModal } from "../../containers/user-profile/state/actions";

const mapStateToProps = state => {
  return {
    modalState: state.userReducer.get('profileModal')
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      toggleProfileModal
    },
    dispatch
  );
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChangePassword)
);


