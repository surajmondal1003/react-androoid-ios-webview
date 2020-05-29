import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import * as actions from '../../containers/user-profile/state/actions'
import GstForm from './gst-form';
import { updateFullScreenLoaderState } from "../../containers/full-page-loader/state/actions";
import { submitStoreComplianceForm, getStoreComplianceDetails } from "../../containers/store-profile/state/actions";

const mapStateToProps = state => {
  return {
    storeComplianceDetails: state.storeReducer.get('storeComplianceDetails')
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateFullScreenLoaderState,
      submitStoreComplianceForm,
      getComplianceDetails: getStoreComplianceDetails
    },
    dispatch
  );
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(GstForm)
);


