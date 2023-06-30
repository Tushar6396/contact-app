import React from 'react'
import ContactCard from './ContactCard'

function ContactList(props) {

const {contacts, deleteContactHandler,contactAfterEdit} = props

const renderContactList = contacts.map((contact,index) => {
  return(
    <ContactCard key={index} contact={contact} 
    deleteContact={() => {deleteContactHandler(index)}}
    contactAfterEdit={latestContact => contactAfterEdit(latestContact,index)}/>
  )
})
  return (
    <div>
      {renderContactList}
    </div>
  )
}

export default ContactList
