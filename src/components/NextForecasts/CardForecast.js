import { useContext } from 'react'
import UnitContext from '../../context/temperatureUnit-context'
import styles from './CardForecast.module.css'

const DAYS = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
]

const CardForecast = ({
  date,
  icon,
  max,
  min
}) => {
  const fixedDate = new Date(Math.floor(date * 1000))
  const month = fixedDate.toLocaleString('en-US', { month: 'short' })
  const day = fixedDate.toLocaleString('en-US', { day: '2-digit' })

  const { temperatureUnit } = useContext(UnitContext)

  let temMax = max
  let temMin = min
  let unit = '°C'

  if (temperatureUnit !== 'celsius') {
    temMax = ((max * (9 / 5)) + 32).toFixed()
    temMin = ((min * (9 / 5)) + 32).toFixed()
    unit = '°F'
  }

  if (date !== 'Tomorrow') {
    date = `${DAYS[fixedDate.getDay()]}, ${day} ${month}`
  }

  return (
    <div className={styles.card}>
      <h2 className={styles}>{date}</h2>
      <img src={icon} alt='' className={styles.image} />
      <div className={styles.temperature}>
        <p>{temMax}{unit}</p>
        <p className={styles.min}>{temMin}{unit}</p>
      </div>
    </div>
  )
}

export default CardForecast
