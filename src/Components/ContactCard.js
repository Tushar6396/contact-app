import React from 'react'

function ContactCard(props) {
    const {id,name,email} = props.contact;
  return (
    <div>
        <div className="item">
            <div className="contact" key={id}>
                <div className="name">{name}</div>
                <div className="email">{email}</div>
                <button className="delete-icon">Delete</button>
            </div>
        </div>
    </div>
  )
}

export default ContactCard
