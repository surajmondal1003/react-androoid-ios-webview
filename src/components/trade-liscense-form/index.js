import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import * as actions from '../../containers/user-profile/state/actions'
import TradeLiscenseForm from './trade-liscense-form';
import { updateFullScreenLoaderState } from "../../containers/full-page-loader/state/actions";

const mapStateToProps = state => {
  return {

  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateFullScreenLoaderState
    },
    dispatch
  );
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TradeLiscenseForm)
);


