import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Tab1 from '../../Pages/Tab1'
import Tab2 from '../../Pages/Tab2'


export default function Navbar() {
  return (  
    
    <>
        <Routes>
          <Route path='/tab1' element={<Tab1/>} />
          <Route path='/tab2' element={<Tab2/>} />
        </Routes> 
    </>
  )
}
