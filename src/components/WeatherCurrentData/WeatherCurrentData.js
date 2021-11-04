import styles from './WeatherCurrentData.module.css'
import DataCard from './DataCard'
import Percentage from '../UI/Percentage'

const WeatherCurrentData = ({ data }) => {
  return (
    <div className={styles.data}>
      <h2 className={styles.title}>Today's Highlights</h2>

      <div className={styles.grid}>
        <DataCard
          title='Wind status'
          number={data.wind_speed.toFixed()}
          measure=' mph'
          className={styles.big}
        >
          <p className={styles.symbol}>
            <span className='material-icons'>play_circle_filled</span>
            <span>WSW</span>
          </p>
        </DataCard>

        <DataCard
          title='Humidity'
          number={data.humidity}
          measure='%'
          className={styles.big}
        >
          <Percentage percentage={data.humidity} />
        </DataCard>

        <DataCard
          title='Visibility'
          number={data.visibility / 1000}
          measure=' miles'
          className={styles.medium}
        />

        <DataCard
          title='Air Pressure'
          number={data.pressure}
          measure=' mb'
          className={styles.medium}
        />
      </div>
    </div>
  )
}

export default WeatherCurrentData
