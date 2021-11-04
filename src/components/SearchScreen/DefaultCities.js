import City from './City'
import styles from './DefaultCities.module.css'

const CITIES = [
  {
    city: 'Nueva York',
    id: 1,
    lat: 40.7127281,
    lng: -74.0060152
  },
  {
    city: 'Londres',
    id: 2,
    lat: 51.5073219,
    lng: -0.1276474
  },
  {
    city: 'Tokio',
    id: 3,
    lat: 35.6828387,
    lng: 139.7594549
  }
]

const DefaultCities = ({ onLocation, onClose }) => {
  const locationUpdateHandler = (place) => {
    onLocation({
      lat: place.lat,
      lng: place.lng
    })
    onClose()
  }

  return (
    <ul className={styles.places}>
      {CITIES.map((place) => (
        <City
          onClick={() => locationUpdateHandler(place)}
          key={place.id}
          city={place.city}
        />
      ))}
    </ul>
  )
}

export default DefaultCities
