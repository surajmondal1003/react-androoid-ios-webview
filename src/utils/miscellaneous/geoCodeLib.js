import Geocode from "react-geocode";
import { GOOGLE_MAP_API_KEY } from "../global_const";

Geocode.setApiKey(GOOGLE_MAP_API_KEY);
Geocode.enableDebug();

export const getCity = (addressArray) => {
  let city = '';
  for (let i = 0; i < addressArray.length; i++) {
    if (addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0]) {
      city = addressArray[i].long_name;
      return city;
    }
  }
};
export const getOtherCity = (addressArray) => {
  let city = '';
  for (let i = 0; i < addressArray.length; i++) {
    if (addressArray[i].types[0]) {
      for (let j = 0; j < addressArray[i].types.length; j++) {
        if ('political' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
          city = addressArray[i].long_name;
          return city;
        }
      }
    }
  }
}
export const getArea = (addressArray) => {
  let area = '';
  for (let i = 0; i < addressArray.length; i++) {
    if (addressArray[i].types[0]) {
      for (let j = 0; j < addressArray[i].types.length; j++) {
        if ('sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
          area = addressArray[i].long_name;
          return area;
        }
      }
    }
  }
}
export const getState = (addressArray) => {
  let state = '';
  for (let i = 0; i < addressArray.length; i++) {
    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0]) {
        state = addressArray[i].long_name;
        return state;
      }
    }
  }
};
export const getZipCode = (addressArray) => {
  let zipCode = '';
  for (let i = 0; i < addressArray.length; i++) {
    if (addressArray[i].types[0] && 'postal_code' === addressArray[i].types[0]) {
      zipCode = addressArray[i].long_name;
      return zipCode;
    }
  }
};
export const getCustomAddress = (addressArray) => {
  let customAddress = [];
  let filterArr = ['street_number', 'route', 'premise', 'sublocality_level_2', 'sublocality_level_3']
  for (let i = 0; i < addressArray.length; i++) {
    if (addressArray[i].types[0]) {
      for (let j = 0; j < addressArray[i].types.length; j++) {
        if (filterArr.includes(addressArray[i].types[j])) {
          customAddress.push(` ${addressArray[i].long_name}`);
        }
      }
    }
  }
  return customAddress.join(',');
};
export function getAddressFromGeoCode(lat, lng) {
  return Geocode.fromLatLng(lat, lng).then(
    response => {
      let address = response.results[0].formatted_address,
        addressArray = response.results[0].address_components,
        city = getCity(addressArray),
        area = getArea(addressArray),
        state = getState(addressArray),
        zipCode = getZipCode(addressArray),
        customAddress = getCustomAddress(addressArray)
      if (city) {
        if (city.length == 0)
          city = getOtherCity(addressArray);
      } else {
        city = getOtherCity(addressArray);
      }
      console.log('city', city, area, state, zipCode, customAddress, response.results[0]);
      return { address, city, area, state, zipCode, lat, lng, customAddress };
    },
    error => {
      console.error(error);
    }
  );
}