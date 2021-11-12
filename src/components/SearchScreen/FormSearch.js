import { useEffect, useRef, useState } from 'react'
import Modal from '../UI/Modal'
import styles from './FormSearch.module.css'

const FormSearch = ({ onLocation, onClose }) => {
  const [error, setError] = useState()
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const submitHandler = (event) => {
    event.preventDefault()
    const enteredPlace = inputRef.current.value
    if (enteredPlace.trim().length === 0) {
      setError('Please enter a valid location (non-empty values).')
      return
    }
    onLocation(enteredPlace)
    onClose()
    inputRef.current.value = ''
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <>
      {error && (
        <Modal
          message={error}
          onConfirm={errorHandler}
        />
      )}
      <form
        className={styles.form}
        onSubmit={submitHandler}
      >
        <label htmlFor='search' className={styles.label}>
          <span className='material-icons'>search</span>
          <input
            ref={inputRef}
            className={styles.input}
            id='search'
            type='text'
            placeholder='search location'
            autoComplete='off'
          />
        </label>
        <button type='submit' className={styles.button}>Search</button>
      </form>
    </>
  )
}

export default FormSearch
