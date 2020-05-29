import React, { Component } from 'react'
import { Modal } from 'reactstrap';
import { getCurrentLocation } from '../../utils/miscellaneous/locationService';
import { getCustomAddress, getAddressFromGeoCode } from '../../utils/miscellaneous/geoCodeLib';
import MapView from '../../components/map-view';

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationObj: null,
      mapModal: false
    }
  }
  componentDidMount() {
    getCurrentCoords();
  }
  getCurrentCoords = async () => {
    const { data, error } = getCurrentLocation();
    if (data) {
      const { lat, long } = data;
      let customAddress = await getAddressFromGeoCode(lat, long);
      this.state.locationObj = { lat: data.lat, long: data.lng, addressObj: { customAddress }, setByUser: true };
      this.addressText.innerText = customAddress;
    }
  }
  toggleMapModal = () => {
    this.setState((prevState) => ({ mapModal: !prevState.mapModal }));
  }
  addressChange = (data) => {
    this.state.locationObj = { lat: data.lat, long: data.lng, addressObj: data, setByUser: true };
  }
  render() {
    let locationObj = this.state.locationObj;
    if (!this.state.locationObj.setByUser)
      locationObj = this.state.locationObj ? this.state.locationObj.toJS() : null;
    return (
      <>
        <p onClick={() => this.toggleMapModal()} ref={ref => this.addressText = ref}></p>
        <Modal isOpen={this.state.mapModal}>
          <MapView locationObj={locationObj} addressChange={this.addressChange} />
        </Modal>
      </>
    )
  }
}
