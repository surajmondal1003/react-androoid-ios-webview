import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Home from "./home";

const mapStateToProps = state => {
  return {
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
  )(Home)
);
