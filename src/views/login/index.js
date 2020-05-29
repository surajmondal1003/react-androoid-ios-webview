import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from './state/actions';
import Login from './login';


const mapStateToProps = state => {
  return {
    // userDetails: state.userReducer.get('userDetails')
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getLoginOtp: actions.getLoginOtp,
      toggleOtpModal: actions.toggleOtpModal,
      getCountryBasedOnIp: actions.getCountryBasedOnIp,
      foreignRegisteration: actions.foreignRegisteration,
      generalSignin: actions.generalSigninAction
    },
    dispatch
  );
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);


