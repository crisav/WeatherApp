import { useEffect, useState } from 'react'

import styles from './App.module.css'

import SearchScreen from './components/SearchScreen/SearchScreen'
import CurrentWeather from './components/CurrentWeather/CurrentWeather'
import TemperatureUnit from './components/TemperatureUnit/TemperatureUnit'
import NextForecasts from './components/NextForecasts/NextForecasts'
import WeatherCurrentData from './components/WeatherCurrentData/WeatherCurrentData'
import Spinner from './components/UI/Spinner'
import Modal from './components/UI/Modal'
import { getPlace } from './helpers/getPlace'

const App = () => {
  const [fetchState, setFetchState] = useState({ data: null, loading: true })
  const [error, setError] = useState()
  const [close, setClose] = useState(-100)
  const [locationData, setLocationData] = useState('Nueva York')

  const { data, loading } = fetchState

  const handleToggle = () => {
    close === 0 ? setClose(-100) : setClose(0)
  }

  const errorHandler = () => {
    setError(null)
  }

  useEffect(() => {
    setFetchState((prevState) => {
      return {
        ...prevState,
        loading: true
      }
    })

    getPlace(locationData)
      .then((data) => {
        setFetchState({
          loading: false,
          data
        })
      })
      .catch(() => {
        setFetchState((prevState) => {
          return {
            ...prevState,
            loading: false
          }
        })
        setError(`no results for your search: ${locationData}`)
      })
  }, [locationData])

  let content = <Spinner />

  if (!loading) {
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
          onLocation={setLocationData}
          city={data.city}
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
