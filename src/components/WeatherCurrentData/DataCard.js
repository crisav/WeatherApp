import styles from './DataCard.module.css'

const DataCard = ({ title, className, number, measure, children }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <h3 className={styles.title}>{title}</h3>
      <p className=''>
        <span className={styles.data}>
          {number}
        </span>
        <span className={styles.measure}>{measure}</span>
      </p>
      {children}
    </div>
  )
}

export default DataCard
