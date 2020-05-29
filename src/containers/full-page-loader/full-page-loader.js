import React, { Fragment } from 'react';
import ReactDOM from "react-dom";
import CircularProgress from '@material-ui/core/CircularProgress';

function Loader(props) {
  return (
    <Fragment>
      {
        props.loaderState &&
        ReactDOM.createPortal(<div className="loading-cont">
          <span><CircularProgress size={24}/></span>
        </div>, document.getElementById('loader_div'))
      }
    </Fragment>
    // <Fragment>
    //   {
    //     props.loaderState ? (
    //       <div style={{ backgroundColor: '#FFF', padding: '20px' }}>
    //         <div className="shine box"></div>

    //         <div className="div">
    //           <div className="shine lines"></div>
    //           <div className="shine lines"></div>
    //           <div className="shine lines"></div>
    //         </div>

    //         <div className="shine photo" ></div>
    //         <div className="shine photo"></div>

    //         <br />

    //         <div className="shine box"></div>

    //         <div className="div">
    //           <div className="shine lines"></div>
    //           <div className="shine lines"></div>
    //           <div className="shine lines"></div>
    //         </div>
    //       </div>
    //     ) : null
    //   }
    // </Fragment>
    
  )
}
export default Loader