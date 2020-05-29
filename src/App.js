import React, { Component } from 'react';
import { Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { store, history } from './utils/config/app_config';
import IndexRouter from './utils/config/navigate';
import Loader from './containers/full-page-loader';
import MessagePopup from './containers/message-popup';
import ErrorBoundary from './components/error-boundary';
import DataFetchComponent from './containers/data-fetch-component';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
// import Header from './views/header';
// import { myAccount } from './containers/login-modal/state/actions';
const theme = createMuiTheme({
  palette: {
    primary: { main: '#2497FB', light: '#38beff', dark: '#0087ca'},
    secondary: { main: '#878787', light: '#afafaf', dark: '#676767'},
    error: { main: '#FF4848', light: '#ff7878', dark: '#e82d2d'}
  }
},
)

class App extends Component {
  // componentDidMount() {
  //   if (localStorage.getItem('pos-token')) {
  //     store.dispatch(myAccount());
  //   }
  // }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Router history={history}>
          {/* <ErrorBoundary> */}
          <MessagePopup />
          <Loader />
          <div className="container-fluid">
            <DataFetchComponent />
            <IndexRouter />
          </div>
          {/* </ErrorBoundary> */}
        </Router>
      </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
