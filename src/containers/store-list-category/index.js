import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import StoreListCategory from "./store-list-category";

const mapStateToProps = (state, props) => {
  let similarReducerObj = ['currentQuery', 'categoryList'];
  let obj = {};
  let reducerName = props.search ? 'storeSearchReducer' : 'storeReducer';
  similarReducerObj.forEach(redData => {
    obj[redData] = state[reducerName].get(redData)
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

    },
    dispatch
  );
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StoreListCategory)
);
