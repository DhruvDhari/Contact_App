import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { IoMdTrash } from 'react-icons/io'
import { RiEditCircleLine } from 'react-icons/ri'
import { db } from '../config/firebase'
import AddAndUpdateContact from './AddAndUpdateContact'
import useDisclouse from '../hooks/useDisclouse'
import { toast } from 'react-toastify'

const ContactCard = ({contact}) => {
  const {onClose,onOpen,isOpen} = useDisclouse();


  const deleteContact = async(id) =>{
    try{
      await deleteDoc(doc(db,"contacts",id))
      toast.success("Contact Deleted Successfully")
    }catch(error){
      console.log(error);
    }
  }
  return (
    <>
        <div key={contact.id} className='bg-yellow flex justify-between items-center rounded-lg p-2 my-3'> 
        <div className="flex gap-1 items-center">
        <HiOutlineUserCircle className=' text-orange text-4xl'/>
         <div className='  max-w-[220px]'>
           <h2 className=' truncate text-lg font-semibold '>{contact.name}</h2>
           <p className=' truncate text-sm font-medium'>{contact.email}</p>
         </div>
        </div>
         <div className="flex text-3xl cursor-pointer">
           <RiEditCircleLine onClick={onOpen} className=' cursor-pointer'/>
           <IoMdTrash onClick={()=>deleteContact(contact.id)} className='text-orange cursor-pointer'/>
         </div>
       </div>
         <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
    </>
    
  )
}

export default ContactCard