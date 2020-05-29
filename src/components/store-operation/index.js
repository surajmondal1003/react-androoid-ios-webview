import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import StoreOperation from './store-operation';
import { submitStoreOperation } from '../../containers/store-profile/state/actions';

const mapStateToProps = state => {
  return {

  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      submitStoreOperation
    },
    dispatch
  );
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StoreOperation)
);


