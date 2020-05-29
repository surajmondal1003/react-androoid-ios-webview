import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import StoreProfile from "./store-profile";
import * as actions from './state/actions';
import { updateFullScreenLoaderState } from "../full-page-loader/state/actions";

const mapStateToProps = state => {
  return {
    userStoreInfo: state.storeReducer.get('storeProfilePageDetails')
  }
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getProfileDetails: actions.gettStoreProfilePageDetails,
      getComplianceDetails: actions.getStoreComplianceDetails,
      submitComplianceForm: actions.submitStoreComplianceForm,
      updateStoreBasicDetails: actions.updateStoreBasicDetails
      
    },
    dispatch
  );
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StoreProfile)
);
