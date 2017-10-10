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

export function getContactNumbers (type, contacts) {

  let contactKeys = [Object.keys(contacts)]
  let numbers = []

  contactKeys.forEach((keys) => {
    keys.forEach((contact) => {
        if (contacts[contact][type]) {
          numbers.push(contacts[contact].contactNumber)
        }
    })
  })
  
  return numbers
}
