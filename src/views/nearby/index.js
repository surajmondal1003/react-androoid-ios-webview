import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Nearby from './nearby';


const mapStateToProps = state => {
  return {
    // userDetails: state.userReducer.get('userDetails')
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
  )(Nearby)
);


