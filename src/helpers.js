export function getUserLocation (callback) {
  navigator.geolocation.getCurrentPosition(
      (err, position) => {
        if (err) {
          callback(err, position)
        } else {
          callback(err, {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
        }
      }
    )
}
