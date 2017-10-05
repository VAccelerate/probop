export function getUserLocation (callback) {
  navigator.geolocation.getCurrentPosition(
      (position) => {
        callback({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      }
    )
}
