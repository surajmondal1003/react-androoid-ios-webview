import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import StoreList from "./store-list";
import { getStoreListFromZone } from "../../views/home/state/actions";

const mapStateToProps = state => {
  let similarReducerObj = ['storeList', 'currentQuery', 'totalRecords', 'requestType'];
  let obj = {};
  similarReducerObj.forEach(redData => {

    obj[redData] = state.storeReducer.get(redData)
  }
  )
  return obj;
  // return {
  //   storeList: state.storeReducer.get('storeList'),
  //   currentQuery: state.storeReducer.get('currentQuery'),
  //   totalRecords: state.storeReducer.get('totalRecords')
  // }
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getStoreListFromZone
    },
    dispatch
  );
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StoreList)
);
