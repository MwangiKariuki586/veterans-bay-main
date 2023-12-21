import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdMenu } from 'react-icons/md';
import './Navbar.css'
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
    
          <MdMenu className="hamburger" />
        </div>
        <div className={isnavExpand ? "nav-links":"nav-links open"}>
            <ul>
                <Link to={"/services"}>
                  <li>
                    services
                  </li>
                </Link>
                <Link to={"/FAQs"}>
                  <li>
                    FAQ
                  </li>
                </Link>
                <Link to={"/contact"}>
                  <li>
                    contact
                  </li>
                </Link>
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
