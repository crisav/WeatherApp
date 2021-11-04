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
    console.log('error')
    throw new Error(`No hay resultados para ${location}`)
  }

  const { lat, lng } = coords.results[0].geometry
  const { city } = coords.results[0].components

  // API openweathermap TO GET WEATHER
  const API_WATHER = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=hourly&appid=5d96aee95530c282c262bdf38d259718&units=metric`

  const resp2 = await fetch(API_WATHER)
  const weather = await resp2.json()

  const { current, daily } = weather

  return {
    city,
    current,
    daily
  }
}
