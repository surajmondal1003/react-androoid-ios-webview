import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import StoreMapView from "./store-map-view";

const mapStateToProps = state => {
  return {
    userCurrLocation: state.userReducer.get('currentLocation')
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
  )(StoreMapView)
);
