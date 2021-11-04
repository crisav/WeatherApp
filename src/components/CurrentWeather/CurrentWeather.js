import Icon from './Icon'
import SearchButton from './SearchButton'
import CurrentData from './CurrentData'
import styles from './CurrentWeather.module.css'

const CurrentWeather = ({ city, data, onClose, onLocation }) => {
  const handleLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        onLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      })
    } else {
      throw new Error('No hay soporte de geolocalización en tu navegador')
    }
  }

  const img = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

  return (
    <section className={styles['current-weather']}>
      <div className={styles.buttons}>
        <SearchButton
          className={styles.search}
          onClick={onClose}
        >
          Search for places
        </SearchButton>
        <SearchButton
          className={styles.location}
          onClick={handleLocation}
        >
          <span className='material-icons'>my_location</span>
        </SearchButton>
      </div>
      <Icon
        img={img}
      />
      <CurrentData
        city={city}
        temperature={data.temp.toFixed()}
        main={data.weather[0].main}
        date={data.dt}
      />
    </section>
  )
}

export default CurrentWeather
