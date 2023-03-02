import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Form from '../../Pages/Form'
import Table from '../../Pages/Table'


export default function Navbar() {
  return (  
    
    <>
        <Routes>
          <Route path='/form' element={<Form/>} />
          <Route path='/table' element={<Table/>} />
        </Routes> 
    </>
  )
}
