import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  
      const [isnavExpand,setIsnavExpand] = useState(false)
      const activateNav = () => {
        setIsnavExpand(!isnavExpand)
      }
  
  return (
    <div>
      <nav>
        <div className="nav-header">
        <div className="logo">
          <Link to= {"/"}>
            <h2>Vetarans Bay</h2>
          </Link>
        </div>
        <div className="hamburger" onClick={activateNav}>
          <span></span>
          <span className = "oddout"></span>
          <span></span>
        </div>
        {/* <MdMenu className="hamburger" /> */}
        </div>
        <div className={isnavExpand ? "nav-links":"nav-links open"}>
            <ul>
                <a href="#categories">
                <li>
                  services
                </li>
                </a>
                <a href="#FAQ">
                <li>
                  FAQ
                </li>
                </a>
                <a href="#contact">
                <li>
                  contact
                </li>
                </a>
                <Link to="/signin">
                  <li style={{border:'2px solid #d3e87d',padding:'1px 9px',borderRadius:'7px',cursor:'pointer'}}>
                      Sign In
                  </li>
                </Link>
            </ul>
        </div>
          
      </nav>
    </div>
    
  )
}

export default Navbar
