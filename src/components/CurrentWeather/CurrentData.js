import { useContext } from 'react/cjs/react.development'
import UnitContext from '../../context/temperatureUnit-context'
import styles from './CurrentData.module.css'

const DAYS = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
]

const CurrentData = ({
  temperature,
  main,
  date,
  city
}) => {
  const formatDate = new Date(Math.floor(date * 1000))
  const month = formatDate.toLocaleString('en-US', { month: 'short' })
  const day = formatDate.toLocaleString('en-US', { day: '2-digit' })

  const { temperatureUnit } = useContext(UnitContext)

  let tem = temperature
  let unit = '°C'

  if (temperatureUnit !== 'celsius') {
    tem = ((temperature * (9 / 5)) + 32).toFixed()
    unit = '°F'
  }

  return (
    <div className={styles.data}>
      <div>
        <p>
          <span className={styles.number}>
            {tem}
          </span>
          <span className={styles.simbol}>
            {unit}
          </span>
        </p>
        <p className={styles.description}>
          {main}
        </p>
      </div>

      <div className={styles.place}>
        <p>
          Today <span className={styles.dot}>.</span> {`${DAYS[formatDate.getDay()]}, ${day} ${month}`}
        </p>
        <p className={styles.location}>
          <span className='material-icons'>location_on</span>
          {city}
        </p>
      </div>
    </div>
  )
}

export default CurrentData
