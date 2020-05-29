import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker, MapControl } from "react-google-maps";
import Autocomplete from 'react-google-autocomplete';
import { GOOGLE_MAP_API_KEY } from '../../utils/global_const';
import { getCity, getArea, getState, getAddressFromGeoCode, getCustomAddress, getZipCode, getOtherCity } from '../../utils/miscellaneous/geoCodeLib';
import { Icon, IconButton } from '@material-ui/core';
import { getCurrentLocation } from '../../utils/miscellaneous/locationService';
import pinImg from '../../assets/img/fixed_pin.svg';
import MapAddress from '../map-address';

export default class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    }
    this.state = { lat: 22.56263, lng: 88.36304 };
    this.hiddenFields = ['address1', 'city', 'pincode', 'regionSelection'];
  }

  shouldComponentUpdate(nextProps, nextState) {

    console.log('prevState', this.state.lat, this.state.lng);
    console.log('nextProps', nextProps.locationObj.lat, nextProps.locationObj.long);
    if (this.state.lat == nextProps.locationObj.lat && this.state.lng == nextProps.locationObj.long)
      return false;
    else {
      console.log('component_updated')
      return true;
    }
  }
  toggleModalState = () => {
    this.setState((prevState) => ({ modal: !prevState.modal }))
  }

  onAddressChange = (data) => {
    this.currentMapData = data;
    if (this.mapAddress)
      this.mapAddress.updateAddress(data.address);
    // this.hiddenFields.forEach(field => {
    //   switch (field) {
    //     case 'address1':
    //       this[field].value = data.address;
    //       break;
    //     case 'city':
    //       this[field].value = data.city;
    //       break;
    //     case 'pincode':
    //       this[field].value = data.zipCode;
    //       break;
    //     case 'regionSelection':
    //       const foundRegion = this.props.regionList.find(x => x.name.toLowerCase().includes(data.state.toLowerCase()));
    //       console.log('foundRegion', foundRegion);
    //       if (foundRegion)
    //         this[field].value = foundRegion.id;
    //   }
    // })
    this.state.lat = data.lat;
    this.state.lng = data.lng;
    console.log('currentMap', this.currentMapData);
    this.props.addressChange(this.currentMapData, this.props.type);
    // this.addressDom.innerText = data.address;
  }
  connfirmLocationClick = () => {
    this.props.onCofirmLocationViaGps(this.currentMapData);
    this.setState({ modal: false, lat: Number(this.currentMapData.lat), lng: Number(this.currentMapData.lng) });
  }
  getMapAddress=()=>{
    return this.mapAddress.getAddress();
  }
  render() {
    const lat = this.props.locationObj ? Number(this.props.locationObj.lat) : 22.5735669,
      lng = this.props.locationObj ? Number(this.props.locationObj.long) : 88.437227;
    console.log('lat,long', lat, lng);
    let locationBar = true;
    if (this.props.locationBar)
      locationBar = JSON.parse(this.props.locationBar);
    const AsyncMap = withScriptjs(
      withGoogleMap(
        props => (
          <GoogleMapsInternalComps ref={ref => this.googleMaps = ref} google={props} modalState={this.state.modal} locationObj={this.props.locationObj} lat={lat} lng={lng} onAddressChange={this.onAddressChange} disableCustom={this.props.disableCustom} />
        )
      )
    );
    return (
      <>
        {/* <button type="button" onClick={() => this.toggleModalState()}><i class="icon-location-2"></i> Get current location</button> */}
        <AsyncMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`}
          loadingElement={
            <div style={{ height: `100%` }} />
          }
          containerElement={
            <div className={this.props.mapClass} style={{ height: this.props.mapHeight, position: 'relative' }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
        />
        {
          locationBar &&
          <MapAddress ref={ref => this.mapAddress = ref} />
          // <div className="selected-locate">
          //   <Icon>pin_drop</Icon>
          //   <p className="location-details" onClick={() => this.toggleMapModal()} ref={ref => this.mapAddress = ref}></p>
          // </div>
        }
        {/* <>
          {
            this.hiddenFields.map(fi => {
              return (
                <input type="hidden" key={fi} ref={ref => this[fi] = ref} value="" />
              )
            })
          }
        </> */}
      </>
    )
  }
}
class GoogleMapsInternalComps extends Component {
  constructor(props) {
    super(props);
    this.defaultMapOptions = {
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
      gestureHandling: 'greedy'
    }
    this.state = {
      lat: this.props.lat,
      lng: this.props.lng,
      zoom: 15
    }
  }
  async componentDidMount() {
    // this.googleMap.props.map.controls
    if (this.state.lat && this.state.lng) {
      console.log('state_lat', this.state.lat, this.state.lng)
      const data = await getAddressFromGeoCode(this.state.lat, this.state.lng);
      if (data) {
        this.props.onAddressChange(data);
      }
    } else {
      console.log('else_Called')
      let geoData = JSON.parse(localStorage.getItem('apa-2-location'));
      this.getCuurentLocation(geoData);
    }
  }
  getCuurentLocation = async (geoData) => {
    if (!geoData) {
      const { data, error } = await getCurrentLocation();
      geoData = data;
    }
    if (geoData) {
      console.log('geoData', geoData);
      const { lat, long } = geoData;
      const address = await getAddressFromGeoCode(lat, long);
      if (address) {
        this.props.onAddressChange(address);
        this.setState({
          lat: lat,
          lng: long
        })
      }
    }
  }
  onPlaceSelected = (place) => {
    let address = place.formatted_address,
      addressArray = place.address_components,
      city = getCity(addressArray),
      area = getArea(addressArray),
      state = getState(addressArray),
      zipCode = getZipCode(addressArray),
      customAddress = getCustomAddress(addressArray),
      latValue = place.geometry.location.lat(),
      lngValue = place.geometry.location.lng();
    if (city) {
      if (city.length == 0)
        city = getOtherCity(addressArray);
    } else {
      city = getOtherCity(addressArray);
    }
    // Set these values in the state.
    console.log('customAddress', customAddress, addressArray, place)
    this.props.onAddressChange({ address, city, area, state, zipCode, customAddress, lat: latValue, lng: lngValue });
    this.setState({
      // address: (address) ? address : '',
      lat: latValue,
      lng: lngValue,
      zoom: 15
    })
  };
  onMapDragEnd = async () => {
    const lat = this._googleMapComponent.getCenter().lat();
    const lng = this._googleMapComponent.getCenter().lng();
    const data = await getAddressFromGeoCode(lat, lng);
    if (data) {
      this.props.onAddressChange(data);
      this.setState({
        lat: data.lat,
        lng: data.lng,
        zoom: 15
      })
    }
  }
  onMarkerDragEnd = async (event) => {
    console.log('event', event);
    let newLat = event.latLng.lat(),
      newLng = event.latLng.lng();
    const data = await getAddressFromGeoCode(newLat, newLng);
    if (data) {
      this.props.onAddressChange(data);
      this.setState({
        lat: data.lat,
        lng: data.lng,
        zoom: 15
      })
    }
  }
  onMapClick = (e) => {
    console.log(e);
  }

  onMapLoad = (_mapInstance) => {
    // let controlButton = document.createElement('div');
    // let controlUI = ''
    // ReactDOM.render(<button>It works</button>, controlUI);
    // controlButton.appendChild(controlUI)
    // _mapInstance.controls[window.google.maps.ControlPosition.TOP_RIGHT].push(controlButton);
  }
  getPropsValue = (keyName, defaultValue) => {
    if (this.props[keyName]) {
      return JSON.parse(this.props[keyName]);
    } else
      return defaultValue;
  }
  render() {
    console.log('google', this.props.google)
    const showAutoComplete = this.getPropsValue('showAutoComplete', true);
    let disableCustom = this.getPropsValue('disableCustom', false);

    return (
      <>
        <GoogleMap google={this.props.google}
          ref={(map) => (this._googleMapComponent = map)}
          zoom={this.state.zoom}
          center={{ lat: Number(this.state.lat), lng: Number(this.state.lng) }}
          // onClick={this.onMarkerDragEnd}
          defaultOptions={this.defaultMapOptions}
          onLoad={(_mapInstance) => this.onMapLoad(_mapInstance)}
          onDragEnd={() => this.onMapDragEnd()}
        >

          {/* For Auto complete Search Box */}
          {showAutoComplete &&
            <Autocomplete
              onPlaceSelected={this.onPlaceSelected}
              types={['geocode', 'establishment']}
              className='search-location-map'
              componentRestrictions={{ country: 'in' }}
            />
          }
          {/*Marker*/}
          {/* <Marker google={this.props.google}
            name={'Dolores park'}
            icon={'https://nextdoorhub.imgix.net/apa/assets/location.png?h=40'}
            draggable={disableCustom ? false : true}
            onDragEnd={this.onMarkerDragEnd}
            position={{ lat: Number(this.state.lat), lng: Number(this.state.lng) }}

          /> */}
          {/* InfoWindow on top of marker */}
          {/* <InfoWindow
              onClose={this.onInfoWindowClose}
              position={{ lat: (this.state.lat + 0.0018), lng: this.state.lng }}
            >
              <div>
                <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
              </div>
            </InfoWindow> */}
        </GoogleMap>
        {
          !disableCustom &&
          <>
            <IconButton className="current-locat" aria-label="delete" onClick={() => this.getCuurentLocation()}>
              <Icon>gps_fixed</Icon>
            </IconButton>
            <div className="map_fixed_pin">
              <img src={pinImg} />
              <div className="map-circle"></div>
            </div>
          </>
        }

      </>
    )
  }
}
