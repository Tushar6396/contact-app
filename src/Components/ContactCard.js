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
            <div className="modal-content">
              <h3>Edit Contact</h3>
              <label>
                Name 
              </label>
              <input type='text' placeholder='name' onChange={handleNameChange} />
              <label>
                Email 
              </label>
              <input type='email' placeholder='email' onChange={handleEmailChange} />
              <div className="buttons">
                <button onClick={() => {handleSave()}} className='save-btn'>Save</button>
                <button onClick={() => {setModalOpen(false)}} className='cancel-btn'>Cancel</button>
              </div>
            </div>
          </div>
        )}
    </>
  )
}

export default ContactCard
