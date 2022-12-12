import '../CSS/modal.css'

const Modal = ({children, isOpen, closeModal}) => {

  const handleClick = () => {
    closeModal()
  }

  return (
    <article className={`modal ${isOpen && 'is-open'}`}>
      <div className="modal-container">
        <button className='modal-close' onClick={handleClick}>cerrar</button>
        {children}
      </div>
    </article>
  )
}

export default Modal