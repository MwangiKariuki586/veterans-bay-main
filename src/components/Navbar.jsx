import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
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
                <li>
                  services
                </li>
                <li>
                    FAQ
                </li>
                <li>
                    contact
                </li>
                <li style={{border:'2px solid #d3e87d',padding:'1px 9px',borderRadius:'7px',cursor:'pointer'}}>
                    Sign In
                </li>
            </ul>
        </div>
      </nav>
    </div>
    
  )
}

export default Navbar
