import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker, MapControl, Polyline, DirectionsRenderer } from "react-google-maps";
import { GOOGLE_MAP_API_KEY } from '../../utils/global_const';

export default class StoreMapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMapView: false,
      directions: null
    }
  }

  render() {
    const userCurrLocation = this.props.userCurrLocation ? this.props.userCurrLocation.toJS() : { lat: 22.56263, long: 88.36304 };
    const storeLocation = this.props.storeLocation;
    const AsyncMap = withScriptjs(
      withGoogleMap(
        props => (
          <GoogleMapsInternalComps google={props} userCurrLocation={userCurrLocation} storeLocation={storeLocation} directions={this.state.directions} />
        )
      )
    );
    return (
      <>
        <AsyncMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`}
          loadingElement={
            <div style={{ height: `100%` }} />
          }
          containerElement={
            <div style={{ height: '100vh', position: 'relative' }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
        />
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
      fullscreenControl: false
    }
    this.state = {
      zoom: 15,
      directions: null
    }
  }
  componentDidMount() {

    const DirectionsService = new window.google.maps.DirectionsService();
    const { lat, long } = this.props.userCurrLocation;
    DirectionsService.route({
      origin: new window.google.maps.LatLng(lat, long),
      destination: new window.google.maps.LatLng(Number(this.props.storeLocation.lat), Number(this.props.storeLocation.lon)),
      travelMode: window.google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        console.log('result', result)
        this.setState({
          directions: result,
        });
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
  }

  onMapLoad = (_mapInstance) => {
    // let controlButton = document.createElement('div');
    // let controlUI = ''
    // ReactDOM.render(<button>It works</button>, controlUI);
    // controlButton.appendChild(controlUI)
    // _mapInstance.controls[window.google.maps.ControlPosition.TOP_RIGHT].push(controlButton);
  }
  render() {
    const { userCurrLocation, storeLocation } = this.props;

    return (
      <>
        <GoogleMap google={this.props.google}
          ref={(map) => (this._googleMapComponent = map)}
          zoom={this.state.zoom}
          center={{ lat: userCurrLocation.lat, lng: userCurrLocation.long }}
          draggable={true}
          defaultOptions={this.defaultMapOptions}
          onLoad={(_mapInstance) => this.onMapLoad(_mapInstance)}>
          {this.state.directions && <DirectionsRenderer directions={this.state.directions} suppressMarkers={true} options={{ suppressMarkers: true }} />}
          {/* <Polyline
            path={pathCoordinates}
            geodesic={true}
            options={{
              strokeColor: "#ff2527",
              strokeOpacity: 0.75,
              strokeWeight: 2,
              icons: [
                {
                  icon: lineSymbol,
                  offset: "0",
                  repeat: "20px"
                }
              ]
            }}
          /> */}
          {/*Marker*/}
          {
            this.state.directions &&
            this.state.directions.geocoded_waypoints.map((x, index) => {
              const coords = index === 0 ? { lat: Number(userCurrLocation.lat), lng: Number(userCurrLocation.long) } : { lat: Number(storeLocation.lat), lng: Number(storeLocation.lon) }
              return (
                <Marker google={this.props.google}
                  key={`coords_${index}`}
                  name={'Dolores park'}
                  position={coords}
                />
              )
            })
          }
          {/* <Marker google={this.props.google}
            name={'Dolores park'}
            draggable={true}
            onDragEnd={this.onMarkerDragEnd}
            position={{ lat: this.state.lat, lng: this.state.lng }}
          />
          <Marker /> */}

        </GoogleMap>
      </>
    )
  }
}
