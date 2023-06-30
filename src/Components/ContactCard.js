import React from 'react'
import "./ContactCard.css"

function ContactCard(props) {
    const {id,name,email} = props.contact;

  const handleDelete = () => {
    props.deleteContact();
  }

  return (
    <>
        <div className="item">
            <div className="contact" key={id}>
                <h3 className="name">{name}</h3>
                <p className="email">{email}</p>                
            </div>
            <div className="icons">
              <button className='edit-icon'>Edit</button>
              <button className="delete-icon" onClick={handleDelete}>Delete</button>
            </div>
            
        </div>
    </>
  )
}

export default ContactCard
