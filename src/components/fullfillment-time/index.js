import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FullfillmentTime from './fullfillment-time';
import { updateStoreBasicDetails } from '../../containers/store-profile/state/actions';

const mapStateToProps = state => {
  return {

  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateStoreBasicDetails
    },
    dispatch
  );
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FullfillmentTime)
);


