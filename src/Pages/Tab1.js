import React, { useState } from 'react'

export default function Tab1() {


    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    })

    const handleSubmit = (event)=>{
        event.preventDefault()
    }

    const handleChange = (event)=>{
        setInputs(event.target.name)
        
      } 


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Full Name:<br/>
            <input
               type='text'
               name='name'
               value={inputs.name}
               onChange={handleChange}
            />
        </label><br/><br/>

        <label> Email: <br/>
            <input
               type='text'
               name='email'
               value={inputs.email}
               onChange={handleChange}
            />
        </label><br/><br/>

        <label>Phone:<br/>
            <input
               type='number'
               name='phone'
               value={inputs.phone}
               onChange={handleChange}
            />
        </label><br/><br/>

        <label>address:<br/>
            <input
               type='text'
               name='address'
               value={inputs.address}
               onChange={handleChange}
            />
        </label><br/><br/>

        <button>Submit</button>
      </form>     
    </>
  )
}
