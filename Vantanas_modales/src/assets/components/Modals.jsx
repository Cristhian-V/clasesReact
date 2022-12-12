import React, { useState } from 'react'
import Modal from './Modal'
import useModal from '../hooks/useModal'

const Modals = () => {
  const [modalOpen, setmodalOpen] = useState('')
  const [isOpenModal1, openModalModal1, closeModalModal1] = useModal()
  const [isOpenModal2, openModalModal2, closeModalModal2] = useModal()

  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModalModal1}> modal 1</button>
      <Modal 
      isOpen={isOpenModal1}
      closeModal={closeModalModal1}>
        <h3>modal 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim commodi ducimus, unde porro, blanditiis deleniti laudantium voluptatum maiores culpa, cum a placeat? Rerum ullam error fugiat mollitia similique facere ducimus.</p>
        <img src="https://placeimg.com/300/300/animals" alt="" />
      </Modal>
      <button onClick={openModalModal2}> modal 2</button>
      <Modal
      isOpen={isOpenModal2}
      closeModal={closeModalModal2}>
        <h3>modal 2</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia cupiditate voluptatum numquam eos ducimus perferendis consectetur recusandae cumque. Sapiente vel modi cupiditate aperiam. Praesentium consectetur, voluptatem culpa molestias quae animi?</p>
        <img src="https://placeimg.com/300/300/houses" alt="" />
  </Modal>
    </div>
  )
}

export default Modals