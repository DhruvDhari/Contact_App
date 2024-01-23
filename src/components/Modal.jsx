import React from 'react'
import { createPortal } from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({onClose,isOpen,children}) => {
  return createPortal(
    <>
    {isOpen && (
      <div  className=" grid place-items-center absolute z-40 top-0 h-screen w-screen backdrop-blur">
      <div className='min-h-[200px] m-auto  relative max-w-[70%] bg-white 
      p-3 z-50 rounded-md md:max-w-[50%] '>
      <div className="flex justify-end">
        <AiOutlineClose onClick={onClose} className=' bg-gray-200 rounded-full p-1  self-end text-3xl cursor-pointer '/>
      </div>
      {children}
    </div> 
      

      </div>
    ) }
    </>
    , document.getElementById("modal-root")
  )
}

export default Modal