export function getUserLocation (callback, error) {
  navigator.geolocation.getCurrentPosition(
      (position) => {
        callback({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      }
    )
}
