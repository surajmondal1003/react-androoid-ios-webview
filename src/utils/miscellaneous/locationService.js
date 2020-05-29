export function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    let data = null;
    let errorObj = { isError: false, message: '' }
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition((position) => {
        data = { lat: position.coords.latitude, long: position.coords.longitude };
        console.log('in_function', data)
        resolve({ data, error: errorObj });
      }, () => {
        errorObj = { isError: true, message: 'Permssion Denied', type: 'permission' };
        resolve({ data, error: errorObj });
      })
    } else {
      errorObj = { isError: true, message: 'Service not supported', type: 'service' };
      resolve({ data, error: errorObj });
    }
  })
}
export function convertToKm(distance) {
  return parseFloat(Number(distance) / 1000).toFixed(2)
}
export function openNavigationLink(storeLat, storeLong) {
  const currLocation = localStorage.getItem('apa-2-location') ? JSON.parse(localStorage.getItem('apa-2-location')) : { lat: '', long: '' };
  const url = `https://www.google.com/maps/dir/?api=1&origin=${currLocation.lat},${currLocation.long}&destination=${storeLat},${storeLong}&travelmode=driving`
  // `https://www.google.co.in/maps/dir/?saddr=${currLocation.lat},${currLocation.long}&daddr=${storeLat},${storeLong}&directionsmode=driving`
  window.open(url, '_blank')
}