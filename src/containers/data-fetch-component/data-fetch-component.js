import React, { Component } from 'react';
import queryString from 'query-string'

export default class DataFetchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: '',
      long: ''
    }
    if (window.TestAndroid)
      console.log('window', window.TestAndroid);
  }
  componentDidMount() {
    window.outsideFunction = this;
    console.log(this.props.location.search);
    const { lat, long, authToken, radius } = queryString.parse(this.props.location.search);
    if (lat && long && authToken && radius) {
      this.getRecords(lat, long, authToken, radius);

    }

    // this.localStorageUpdated();
    // window.addEventListener('storage', this.localStorageUpdated);
  }

  localStorageUpdated = () => {
    if (window.localStorage) {
      if (window.localStorage.getItem('params')) {
        const { lat, long, authToken } = JSON.parse(window.localStorage.getItem('params'));
        if ((this.state.lat != lat) || (this.state.long != long)) {
          console.log('mismatch', lat, long);
          this.setState({ lat, long });
          this.getRecords(lat, long, authToken);
        }
      }

    } else {
      alert('localstore not found');
    }
  }
  getRecords = (lat, long, authToken, radius) => {
    // alert('getRecordsCalled');
    window.localStorage.setItem('apa-2-token', authToken);
    this.props.getZoneFromLatLong({ lat, long, radius });
  }
  render() {
    return (
      <div>
        {/* <button
          type="button"
          onClick={() => {
            if (window.TestAndroid) {
              window.TestAndroid.openAndroidDialog('hello world')
            }
            if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.jsMessageHandler) {
              window.webkit.messageHandlers.jsMessageHandler.postMessage('hello world');
            }
          }}>
          Call Android
        </button> */}
      </div>
    )
  }
}
