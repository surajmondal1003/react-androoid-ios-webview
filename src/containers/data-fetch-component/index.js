import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DataFetchComponent from "./data-fetch-component";
import { getZoneFromLatLong } from "../../views/home/state/actions";

const mapStateToProps = state => {
  return {

  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getZoneFromLatLong
    },
    dispatch
  );
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DataFetchComponent)
);
