import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    
    
    <div >
        <nav className='header'>
            <ul>
                <li>
                    <Link to='form'>Form</Link>
                </li>

                <li>
                    <Link to='table'>Table</Link>
                </li>
            </ul>
        </nav>
         
    </div>
  )
}
