import React from 'react';
import ReactDOM from 'react-dom';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function MessagePopup(props) {
  const msgTypeObj = { 'error': 'fa-times-circle', 'success': 'fa-check-circle', 'info': 'fa-info-circle', 'warning': 'fa-exclamation-circle' }
  const messages = props.messages.toJS();
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    props.dismissMessage()
  };
  return (
    messages.map((message) => {
      setTimeout(() => props.dismissMessage(), 5000);
      return (
        ReactDOM.createPortal(
          <Snackbar open={true} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={5000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={message.type}>
              {message.body}
            </Alert>
          </Snackbar>
          //   <div className="alert-msg success">
          //   <i class="fas fa-check-circle"></i>
          //   <span>{message.body}</span>
          // </div>
          //   <div className="alert-msg info">
          //   <i class="fas fa-info-circle"></i>
          //   <span>{message.body}</span>
          // </div>
          // <div className="alert-msg error">
          //   <i class="fas fa-times-circle"></i>
          //   <span>{message.body}</span>
          // </div>
          , document.getElementById('message_div'))
      )
    })
  )
}
export default MessagePopup;