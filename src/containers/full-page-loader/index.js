import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Loader from "./full-page-loader";

const mapStateToProps = state => {
  return {
    loaderState: state.fullPageLoaderReducer.get("loaderState")
  };
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
  )(Loader)
);
