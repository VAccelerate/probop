export function getUserLocation (callback) {
  navigator.geolocation.getCurrentPosition(
      (position, err) => {
        if (position) {
          callback({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }, err)
        } else {
          console.log(err.message)
        }
      }
    )
}
