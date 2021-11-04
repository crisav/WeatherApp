import styles from './Percentage.module.css'

const Percentage = ({ percentage }) => {
  return (
    <div className={styles.percentage}>
      <div className={styles.numbers}>
        <p>0</p>
        <p>50</p>
        <p>100</p>
      </div>
      <div className={styles.graph}>
        <div style={{ width: `${percentage}%` }} className={styles.sub_graph} />
      </div>
      <p>%</p>
    </div>
  )
}

export default Percentage
