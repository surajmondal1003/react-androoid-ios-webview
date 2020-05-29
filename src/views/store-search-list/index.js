import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import StoreSearchList from './store-search-list';
import { getStoreListFromSearch, getStoreSearchCategoryList } from "../nearby/state/actions";


const mapStateToProps = state => {
  let similarReducerObj = ['storeSearchList', 'currentQuery', 'totalRecords', 'requestType'];
  let obj = {};
  similarReducerObj.forEach(redData => {
    obj[redData] = state.storeSearchReducer.get(redData)
  }
  )
  console.log('onj', obj);
  return obj;
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getStoreListFromSearch,
      getStoreSearchCategoryList
    },
    dispatch
  );
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StoreSearchList)
);


