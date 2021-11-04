import styles from './SearchButton.module.css'

const SearchButton = ({ children, type, className, onClick }) => {
  return (
    <button
      type={type || 'button'}
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default SearchButton
