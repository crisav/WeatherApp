import ReactDOM from 'react-dom'

import styles from './Modal.module.css'

const Backdrop = ({ onClose }) => {
  return <div className={styles.backdrop} onClick={onClose} />
}

const ModalOverlay = ({ message, onConfirm }) => {
  return (
    <div className={styles.modal}>
      <header className={styles.header}>
        <h2>Error</h2>
      </header>
      <div className={styles.content}>
        <p>{message}</p>
      </div>
      <footer className={styles.actions}>
        <button onClick={onConfirm}>Okay</button>
      </footer>
    </div>
  )
}

const portalElement = document.getElementById('overlays')

const Modal = ({ message, onConfirm }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={onConfirm} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          message={message}
          onConfirm={onConfirm}
        />,
        portalElement
      )}
    </>
  )
}

export default Modal
