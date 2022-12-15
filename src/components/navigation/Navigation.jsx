import React from 'react'
import { Link } from 'react-router-dom'

import './navigation.scss'

function Navigation() {
  return (
    <header className='header'>
        <div className="header-item">
            <div className="logo">
                <img src="" alt="" />
            </div>
        </div>
        <div className="header-item">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-list_item">
                        <Link to='/about' className='nav-link'>About</Link>
                    </li>
                    <li className="nav-list_item">
                        <Link to='/services' className='nav-link'>Services</Link>
                    </li>
                    <li className="nav-list_item">
                        <Link to='/contact' className='nav-link'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div className="header-item">
            <div className="logo">
                <img src="" alt="" />
            </div>
        </div>
    </header>
  )
}

export default Navigation