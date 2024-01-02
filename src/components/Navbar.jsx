import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdMenu } from 'react-icons/md';
import { MdOutlineClose } from "react-icons/md";

import './Navbar.css'
const Navbar = () => {
  
      const [isnavExpand,setIsnavExpand] = useState(false)
      const activateNav = () => {
        setIsnavExpand(!isnavExpand)
      }
      const navMinimize = () => {
        setIsnavExpand(false)
      }
  
  return (
    <div>
      <nav>
        <div className="nav-header">
          <div className="logo">
            <Link onClick={navMinimize} to= {"/"}>
              <h2>Vetarans Bay</h2>
            </Link>
          </div>
          {isnavExpand ? <MdOutlineClose className="hamburger" onClick={activateNav} /> : <MdMenu className="hamburger" onClick={activateNav} />}
        </div>
        <div className={isnavExpand ? "nav-links":"nav-links open"}>
            <ul onClick={navMinimize}>
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
