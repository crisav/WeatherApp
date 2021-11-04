import { useEffect, useState } from 'react'

import styles from './App.module.css'

import SearchScreen from './components/SearchScreen/SearchScreen'
import CurrentWeather from './components/CurrentWeather/CurrentWeather'
import TemperatureUnit from './components/TemperatureUnit/TemperatureUnit'
import NextForecasts from './components/NextForecasts/NextForecasts'
import WeatherCurrentData from './components/WeatherCurrentData/WeatherCurrentData'
import Spinner from './components/UI/Spinner'
import Modal from './components/UI/Modal'
import { useFetch } from './hooks/useFetch'
import { getPlace } from './helpers/getPlace'

const App = () => {
  const [error, setError] = useState()
  const [close, setClose] = useState(-100)
  const [locationData, setLocationData] = useState({
    city: 'Nueva York',
    lat: 40.7127281,
    lng: -74.0060152,
    searchByCity: false
  })

  const handleToggle = () => {
    close === 0 ? setClose(-100) : setClose(0)
  }

  const errorHandler = () => {
    setError(null)
  }

  const { lat, lng, city, searchByCity } = locationData

  useEffect(() => {
    const params =
    searchByCity === true
      ? city
      : { lat, lng }

    getPlace(params)
      .then((resp) => {
        setLocationData({
          city: resp.city,
          lat: resp.lat,
          lng: resp.lng,
          searchByCity: false
        })
      })
      .catch((err) => {
        console.error(err)
        setError(`no results for your search: ${city}`)
      })
  }, [lat, lng, city])

  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=hourly&appid=5d96aee95530c282c262bdf38d259718&units=metric`

  const { data, error: dataError, loading } = useFetch(url)

  let content = <Spinner />

  if (dataError) {
    console.log(dataError)
    content = <h1>ERROOOOOOOR</h1>
  }

  if (!dataError && !loading) {
    content = (
      <main className={styles.main}>
        {error && (
          <Modal
            message={error}
            onConfirm={errorHandler}
          />
        )}
        <SearchScreen
          onLocation={setLocationData}
          onClose={handleToggle}
          close={close}
        />
        <CurrentWeather
          location={{ lat, lng }}
          onLocation={setLocationData}
          city={locationData.city}
          data={data.current}
          onClose={handleToggle}
        />
        <div className={styles.columns}>
          <TemperatureUnit />
          <NextForecasts
            data={data.daily}
          />
          <WeatherCurrentData
            data={data.current}
          />
        </div>
      </main>
    )
  }

  return (
    <>
      {content}
    </>
  )
}

export default App
