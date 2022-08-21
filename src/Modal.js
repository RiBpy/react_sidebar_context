import React ,{useState}from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';
const Modal = () => {
  const {isModalOpen,closeModal}=useGlobalContext();
  const [showMore,setShowMore]=useState(false);
  const demoText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dicta iusto esse minus inventore illum doloremque cum consectetur nobis ex maxime quos delectus nostrum nemo, nesciunt laborum a earum omnis."
  return (
    <div className={`${isModalOpen? "modal-overlay show-modal":"modal-overlay"}`}>
       <div className='modal-container'>
        <h3>modal content</h3>
        <p>
          {showMore?demoText:`${demoText.substring(0,100)}`}
          <button class="show-more" onClick={()=>setShowMore(!showMore)}>{showMore?"...Show Less":"...Show More"}</button>
        </p>
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes/>
        </button>
      </div>
    </div>
  )
}

export default Modal
