import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import StoreCreateBusinessCategory from './store-create-businessCategory';
import { getBusinessCategoryList } from '../../containers/store-profile/state/actions';


const mapStateToProps = state => {
  return {
    businessCategoryList: state.storeReducer.get('businessCategoryList')
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getBusinessCategoryList
    },
    dispatch
  );
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StoreCreateBusinessCategory)
);


