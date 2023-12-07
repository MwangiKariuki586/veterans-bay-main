import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import { MdMenu } from "react-icons/md";
const Navbar = () => {
  return (
    
    <div>
      <nav>
        <div className="logo">
            
          <Link to= {'/signin'}>
            <h2>Vetarans Bay</h2>
          </Link>
            
        </div>
        <div className="nav-links">
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
                <li style={{border:'2px solid #d3e87d',padding:'1px 9px',borderRadius:'7px',cursor:'pointer'}}>
                    Sign In
                </li>
                
            </ul>
            <MdMenu />
        </div>
      </nav>
    </div>
    
  )
}

export default Navbar
