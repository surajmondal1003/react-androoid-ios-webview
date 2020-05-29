import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker, MapControl } from "react-google-maps";
import Autocomplete from 'react-google-autocomplete';
import { GOOGLE_MAP_API_KEY } from '../../utils/global_const';

export default class GeoAutocomplete extends Component {

  shouldComponentUpdate(){
    return false;
  }
  render() {
    const AsyncMap = withScriptjs(
      withGoogleMap(
        props => (
          <Autocomplete
            onPlaceSelected={this.props.onPlaceSelected}
            types={['geocode', 'establishment']}
            className={this.props.className ? this.props.className : 'search-location-map'}
            componentRestrictions={{ country: 'in' }} />
        )
      )
    )
    return (
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
    )
  }
}
