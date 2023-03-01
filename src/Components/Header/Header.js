import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    
    
    <div >
        <nav className='header'>
            <ul>
                <li>
                    <Link to='tab1'>Tab1</Link>
                </li>

                <li>
                    <Link to='tab2'>Tab2</Link>
                </li>
            </ul>
        </nav>
         
    </div>
  )
}
