import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import OtpModal from "./otp-modal";
import { sendLoginOtp, getLoginOtp, toggleOtpModal } from "../../views/login/state/actions";
import { updateUserProfile, verifyProfileOtp } from "../../containers/user-profile/state/actions";

const mapStateToProps = state => {
  return {
    modalState: state.userReducer.get("modalState").toJS()
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      sendLoginOtp,
      getLoginOtp,
      toggleOtpModal,
      updateUserProfile,
      verifyProfileOtp
    },
    dispatch
  );
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(OtpModal)
);
