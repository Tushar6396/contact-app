import React, { useState } from 'react'
import "./ContactCard.css"

function ContactCard(props) {
  const {id,name,email} = props.contact;

  const [isModalOpen, setModalOpen] = useState(false)
  const [editedName, setEditedName] = useState(name)
  const [editedEmail, setEditedEmail] = useState(email)

  const handleEdit = () => {
    setModalOpen(true)
  }

  const handleDelete = () => {
    props.deleteContact();
  }

  const handleNameChange = (e) => {
    setEditedName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEditedEmail(e.target.value)
  }

  const handleSave = () => {
    const latestContact = {
      id:id,
      name:editedName,
      email:editedEmail
    }
    
    props.contactAfterEdit(latestContact)
    setModalOpen(false)
    
  }

  return (
    <>
        <div className="item">
            <div className="contact" key={id}>
                <h3 className="name">{name}</h3>
                <p className="email">{email}</p>                
            </div>
            <div className="icons">
              <button className='edit-icon' onClick={handleEdit}>Edit</button>
              <button className="delete-icon" onClick={handleDelete}>Delete</button>
            </div>
            
        </div>

        {isModalOpen && (
          <div className='modal'>
              <label>
                Name <input type='text' placeholder='name' onChange={handleNameChange} />
              </label>
              <label>
                Email <input type='email' placeholder='email' onChange={handleEmailChange} />
              </label>
              <button onClick={() => {handleSave()}}>Save</button>
              <button onClick={() => {setModalOpen(false)}}>Cancel</button>
          </div>
        )}
    </>
  )
}

export default ContactCard
