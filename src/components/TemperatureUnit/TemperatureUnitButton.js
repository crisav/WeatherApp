import styles from './TemperatureUnitButton.module.css'

const TemperatureUnitButton = ({ children, unitContextTemperature, onUpdateUnit, unit }) => {
  return (
    <button
      className={`${styles.button} ${unitContextTemperature === unit ? styles.selected : styles.unselect}`}
      onClick={onUpdateUnit}
    >
      {children}
    </button>
  )
}

export default TemperatureUnitButton
