import axios from "axios";
import { store } from "./app_config";
import { updateFullScreenLoaderState } from "../../containers/full-page-loader/state/actions";
import { showMessagePopup } from "../../containers/message-popup/state/actions";
// import { STORE_USER_DETAILS } from "../../containers/login-modal/state/constants";
// import { history } from "../index"
// import { showMessagePopup } from "../containers/message/actions";
// import * as actions from "../containers/loader/actions";
// import ErrorBoundary from "../components/error-boundary";
// import Loader from "../containers/loader";

const GLOBAL_RESPONSE_STATUS_CODE_HANDLERS = {
  // Unauthorized

  400: (res, url) => {
    // store.dispatch(
    // store.dispatch(
    //   showMessagePopup({
    //     title: "",
    //     body: res.message ? res.message : " Your have issued a malformed or illegal request. That's all we know.!",
    //     type: "danger",
    //     visible: true
    //   })
    // )
    // )
    return false
  },

  401: (res, url) => {
    window.localStorage.removeItem('apa-2-token');
    // store.dispatch({ type: STORE_USER_DETAILS, payload: null })
    // removeAuthToken()
    // store.dispatch(
    //   showMessagePopup({
    //     title: "",
    //     body: "Invalid User Details",
    //     type: "danger",
    //     visible: true
    //   })
    // );
    return false;
  },
  404: (res, url) => {
    // store.dispatch(
    //   showMessagePopup({
    //     title: "Error",
    //     body: res.message ? res.message : "Something went wrong !",
    //     type: "danger",
    //     visible: true,
    //     type: 'error',
    //     position: 'topRight',
    //   })
    // );
    return false;
  },
  500: (res, url) => {
    // store.dispatch(
    //   showMessagePopup({
    //     message: 'Server down! Please try later',
    //     body: 'Server down! Please try later',
    //     visible: true,
    //     type: 'error',
    //     color: '#e53e3d',
    //   }),
    // );
    return false;
  },
  422: (res, url) => {
    // store.dispatch(
    //   showMessagePopup({
    //     message: res.message ? res.message : 'Server down! Please try later',
    //     body: res.message ? res.message : 'Server down! Please try later',
    //     visible: true,
    //     type: 'error',
    //     color: '#e53e3d',
    //   }),
    // );
    return false;
  },
  416: (res, url) => {

    // store.dispatch(
    //   showMessagePopup({
    //     message: res.message ? res.message : 'Server down! Please try later',
    //     body: res.message ? res.message : 'Server down! Please try later',
    //     visible: true,
    //     type: 'error',
    //     color: '#e53e3d',
    //   }),
    // );
    return false;
  }
};

function callAPI(url, options, headers) {
  if (options.method === "post") {
    return axios
      .post(url, options.params, { headers: { ...headers } })
      .then(res => Promise.resolve(res.data))
      .catch(error =>
        GLOBAL_RESPONSE_STATUS_CODE_HANDLERS[error.response.status](
          error.response.data, url
        )
      );
  } else if (options.method === "get") {
    console.log('url', url, headers)
    return axios
      .get(url, { params: options.params, headers: { ...headers } })
      .then(res => Promise.resolve(res.data))
      .catch(error =>
        GLOBAL_RESPONSE_STATUS_CODE_HANDLERS[error.response.status](
          error.response.data, url
        )
      );
  } else if (options.method === "put") {
    return axios
      .put(url, options.params, { headers: { ...headers } })
      .then(res => Promise.resolve(res.data))
      .catch(error => {
        GLOBAL_RESPONSE_STATUS_CODE_HANDLERS[error.response ? error.response.status : 500](
          error.response.data, url
        )
      }
      );
  }
  else if (options.method === "delete") {
    return axios
      .delete(url, { headers: { ...headers } })
      .then(res => { console.log('response', res.data); return Promise.resolve(res.data) })
      .catch(error =>
        GLOBAL_RESPONSE_STATUS_CODE_HANDLERS[error.response.status](
          error.response.data, url
        )
      );
  }
}

function callNodeApi(url, options, headers) {
  const postPayload = {
    url,
    headers,
    options
  }
  return axios
    .post(`${process.env.REACT_APP_NODE_API_URL}/intercept`, postPayload, { headers })
    .then(res => { return Promise.resolve(res.data) })
    .catch(error => {
      return GLOBAL_RESPONSE_STATUS_CODE_HANDLERS[error.response.status](error.response.data.error, url)
    }
    )
}

export default async function request(url, options, tokenRequired = true) {

  manageLoader(options.isLoader, true);
  let defaultHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Client-Token": 'ZsPdUgSTQbt26kFiRKG/PQ=='
  };

  let res = "";
  // console.log(localStorage.getItem("apa-2-token"));
  // console.log(tokenRequired);
  if (tokenRequired) {
    // console.log(localStorage.getItem("apa-2-token"));
    const authHeader = {
      "X-Auth-Token": window.localStorage.getItem("apa-2-token")
    };
    defaultHeaders = Object.assign({}, defaultHeaders, authHeader);
  }

  res = callNodeApi(url, options, defaultHeaders).then((val) => {
    manageLoader(options.isLoader, false)
    return val
  }).catch(err => console.log(err));
  return res;
}

function manageLoader(isShow, isVal) {
  if (isShow) {
    store.dispatch(updateFullScreenLoaderState(isVal));
  }
}