import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { submitStoreDeliveryAttr } from '../../containers/store-profile/state/actions';

import DeliveryTime from './delivery-time';

const mapStateToProps = state => {
  return {

  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      submitStoreDeliveryAttr
    },
    dispatch
  );
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DeliveryTime)
);


