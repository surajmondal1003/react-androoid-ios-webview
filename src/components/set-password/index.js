import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SetPassword from './set-password';
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
  )(SetPassword)
);


