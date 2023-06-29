import React, { useState } from 'react'
import './AddContact.css'

function AddContact(props) {

  const[name,setName] = useState('')
  const[email,setEmail] = useState('')

  function handleSubmit(e){
    e.preventDefault();
    if(name === '' || email === ''){
      alert('All the fields are mandatory')
      return
    }
    props.addContactHandler(name,email)
    setName('')
    setEmail('')
  }

  return (
    <div className='addContactComponent'>
      <h2>Add Contact</h2>

      <form onSubmit={handleSubmit}>

        <fieldset>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder='name' 
          value={name} onChange={(e) => setName(e.target.value)} />

          <label htmlFor="email">Email</label>
          <input type="email" placeholder='email'
          value={email} onChange={(e) => setEmail(e.target.value)} />
        </fieldset>

        <input className='add-btn' type='submit' value='Add' />

      </form>

    </div>
  )
}

export default AddContact
