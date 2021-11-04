import styles from './Icon.module.css'
import Shower from '../../assets/images/Shower.png'

const Icon = ({ img = Shower }) => {
  return (
    <div className={styles.icon}>
      <img
        src={img}
        alt='current weather'
        className={styles.img}
      />
    </div>
  )
}

export default Icon
