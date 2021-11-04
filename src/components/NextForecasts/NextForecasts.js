import CardForecast from './CardForecast'
import styles from './NextForecasts.module.css'

const NextForecasts = ({ data }) => {
  const nextDays = []

  // I´ll just use the next five days instead of all
  for (let i = 1; i <= 5; i++) {
    nextDays.push({
      id: data[i].dt,
      date: (i === 1) ? 'Tomorrow' : data[i].dt,
      icon: `http://openweathermap.org/img/wn/${data[i].weather[0].icon}@2x.png`,
      max: data[i].temp.max.toFixed(),
      min: data[i].temp.min.toFixed()
    })
  }

  return (
    <section className={styles['next-forecasts']}>
      {nextDays.map(day => (
        <CardForecast
          key={day.id}
          id={day.id}
          date={day.date}
          icon={day.icon}
          max={day.max}
          min={day.min}
        />
      ))}
    </section>
  )
}

export default NextForecasts
