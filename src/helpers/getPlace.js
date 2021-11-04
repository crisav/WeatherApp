/* eslint-disable no-undef */
export const getPlace = async (location) => {
  // API opencagedata TO GET COORDS

  const API_PLACE =
    typeof location !== 'object'
      ? `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=1eedc91add36457b880f5df531979344`
      : `https://api.opencagedata.com/geocode/v1/json?q=${location.lat}+${location.lng}&key=1eedc91add36457b880f5df531979344`

  const resp = await fetch(API_PLACE)
  const coords = await resp.json()

  if (coords.results.length === 0) {
    console.log('errro')
    throw new Error(`No hay resultados para ${location}`)
  }

  const { city } = coords.results[0].components
  const { lat, lng } = coords.results[0].geometry

  return {
    city,
    lat,
    lng
  }
}
