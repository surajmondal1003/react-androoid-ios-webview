import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ReferStoreForm from './refer-store-form';
import { getBusinessCategoryList, referStoreAction } from '../../containers/store-profile/state/actions';

const mapStateToProps = state => {
  return {
    businessCategoryList: state.storeReducer.get('businessCategoryList'),
    // modalState: state.storeReducer.get('storeReferModal').toJS()

  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getBusinessCategoryList,
      // toggleReferStoreModal,
      referStoreAction
    },
    dispatch
  );
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ReferStoreForm)
);


