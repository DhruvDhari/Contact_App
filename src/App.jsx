import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import {FiSearch} from "react-icons/fi"
import {  AiFillPlusCircle } from "react-icons/ai"
import { collection, getDocs, onSnapshot } from "firebase/firestore"
import { db } from "./config/firebase"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContactCard from './components/ContactCard'
import Modal from './components/Modal'
import AddAndUpdateContact from './components/AddAndUpdateContact'
import useDisclouse from './hooks/useDisclouse'
import NotFoundContact from './components/NotFoundContact'
const App = () => {

  const [contacts,setContacts]= useState([]);
  const {onClose,onOpen,isOpen} = useDisclouse();



  useEffect(()=>{
    const getContacts=async()=>{

      try{
        const contactsRef = collection(db,"contacts");
     
        onSnapshot(contactsRef,(snapshot)=>{
          const contactLists =snapshot.docs.map((doc)=>{
            return {
              id:doc.id,
              ...doc.data()
            }
          });
          setContacts(contactLists);
         return contactLists;
        })
    
    
      }catch(error){

      }
    }
    getContacts();
  },[])


  const filterContacts = (e)=>{
    const value=e.target.value;
    const contactsRef = collection(db,"contacts");
     
        onSnapshot(contactsRef,(snapshot)=>{
          const contactLists =snapshot.docs.map((doc)=>{
            return {
              id:doc.id,
              ...doc.data()
            }
          });
          const filteredContacts = contactLists.filter(contact=>
            contact.name.toLowerCase().includes(value.toLowerCase()))
          setContacts(filteredContacts);
         return filteredContacts;
        })
    
  }

  return (
    <>
    <div className=" max-w-[370px] mx-auto px-4 ">
    <Navbar/>
   <div className="flex gap-2">
   <div className=' relative flex items-center flex-grow'>
      <FiSearch className='absolute text-white text-2xl ml-1'/>
      <input onChange={filterContacts} type="text" className='border border-white bg-transparent rounded-md h-10 flex-grow text-white pl-8 text-lg' />
    </div>
    
      <AiFillPlusCircle className=' text-5xl cursor-pointer text-white' onClick={onOpen}/>
  
   </div>
   <div className="mt-4">
    {contacts.length<=0?<NotFoundContact/>:contacts.map((contact)=>(
     <ContactCard  key={contact.id} contact={contact}/>
    ))}
   </div>
    </div>
   <AddAndUpdateContact isOpen={isOpen} onClose={onClose}/>
   <ToastContainer position='bottom-center'/>
    </>
  )
}

export default App