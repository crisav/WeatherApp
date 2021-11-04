import DefaultCities from './DefaultCities'
import FormSearch from './FormSearch'
import styles from './SearchScreen.module.css'

const SearchScreen = ({ close, onClose, onLocation }) => {
  return (
    <section
      className={styles['search-screen']}
      style={{ transform: `translateX(${close}%)` }}
    >
      <button
        className={styles.button}
        onClick={onClose}
      >
        X
      </button>

      <FormSearch
        onLocation={onLocation}
        onClose={onClose}
      />
      <DefaultCities
        onLocation={onLocation}
        onClose={onClose}
      />
    </section>
  )
}

export default SearchScreen
