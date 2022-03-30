import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss';
const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="d-flex justify-content-between">
        <div className="logo">
          <h2>Logo</h2>
        </div>
        <ul className='d-flex list-unstyled'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/haqqimizda">About</Link>
          </li>
        </ul>
        </div>
      </div>
      
    </header>
  )
}

export default Header