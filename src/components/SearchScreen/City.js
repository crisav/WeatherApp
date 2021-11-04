import styles from './City.module.css'

const City = ({ city, onClick }) => {
  return (
    <li
      className={styles.cities}
      onClick={onClick}
    >
      {city}
      <span className='material-icons'>chevron_right</span>
    </li>
  )
}

export default City
