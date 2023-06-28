import React from 'react'
import ContactCard from './ContactCard'

function ContactList(props) {
console.log(props)

const renderContactList = props.contacts.map((contact) => {
  return(
    <ContactCard contact={contact} />
  )
})
  return (
    <div>
      {renderContactList}
    </div>
  )
}

export default ContactList
