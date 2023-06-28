import React from 'react'
import ContactCard from './ContactCard'

function ContactList(props) {

const {contacts, deleteContactHandler} = props

const renderContactList = contacts.map((contact,index) => {
  return(
    <ContactCard key={index} contact={contact} deleteContact={() => {deleteContactHandler(index)}} />
  )
})
  return (
    <div>
      {renderContactList}
    </div>
  )
}

export default ContactList
