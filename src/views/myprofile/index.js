import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MyProfile from './myprofile';
import { gettStoreProfilePageDetails } from "../../containers/store-profile/state/actions";
import {getAccountDetails} from '../../views/login/state/actions';



const mapStateToProps = state => {
  return {
    userDetails: state.userReducer.get('userDetails'),
    userStoreInfo: state.userReducer.get('userStoreInfo'),
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      gettStoreProfilePageDetails,
      getAccountDetails
    },
    dispatch
  );
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MyProfile)
);


