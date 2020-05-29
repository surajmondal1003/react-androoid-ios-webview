import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DemoStoreList from "./demo-store-list";
import { getDemoStoreList } from "../../views/home/state/actions";
// import { toggleReferStoreModal } from "../store-create/state/action";

const mapStateToProps = state => {
  return {
    demoStoreList: state.storeReducer.get('demoStoreList'),
  }
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getDemoStoreList,
      // toggleReferStoreModal
    },
    dispatch
  );
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DemoStoreList)
);
