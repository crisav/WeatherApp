import { useContext } from 'react/cjs/react.development'
import UnitContext from '../../context/temperatureUnit-context'
import styles from './TemperatureUnit.module.css'
import TemperatureUnitButton from './TemperatureUnitButton'

const TemperatureUnit = () => {
  const {
    temperatureUnit,
    onTemperatureUnitUpdate
  } = useContext(UnitContext)

  const unitHandler = (unit) => {
    onTemperatureUnitUpdate(unit)
  }

  return (
    <div className={styles.scales}>
      <TemperatureUnitButton
        unit='celsius'
        unitContextTemperature={temperatureUnit}
        onUpdateUnit={() => unitHandler('celsius')}
      >
        °C
      </TemperatureUnitButton>
      <TemperatureUnitButton
        unit='fahrenheit'
        unitContextTemperature={temperatureUnit}
        onUpdateUnit={() => unitHandler('fahrenheit')}
      >
        °F
      </TemperatureUnitButton>
    </div>
  )
}

export default TemperatureUnit
