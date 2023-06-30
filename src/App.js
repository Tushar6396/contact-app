import './App.css';
import Header from './Components/Header'
import AddContact from "./Components/AddContact";
import ContactList from './Components/ContactList';
import { useEffect, useState } from 'react';

function App() {

  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts,setContacts] = useState(null)

  const addContactHandler = (name,email) =>{
    const newContact = {name , email}
    setContacts([...contacts,newContact])
  }

  const deleteContactHandler = (index) => {
    const updatedContacts = contacts.filter((_,i) => {
      return i !== index
    })
    setContacts(updatedContacts)
  }

const contactAfterEdit = (latestContact,index) => {
  const updatedContacts = [...contacts]
  updatedContacts[index] = latestContact
  setContacts(updatedContacts);
};
  
  useEffect(() => {
    const storedContact =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedContact){
      setContacts(storedContact)
    }
  },[])

  useEffect(() => {
    if (contacts !== null) {
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
    }
  },[contacts])

  if(contacts == null){
    return <div className="loading">Loading...</div>
  }

  return (
    <div className='app'>
       <Header />
       <AddContact addContactHandler={addContactHandler}/>
       <ContactList contacts={contacts} deleteContactHandler= {deleteContactHandler} 
       contactAfterEdit={contactAfterEdit}/> 
    </div>
  );
}

export default App;
