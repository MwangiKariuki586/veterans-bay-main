import React from 'react'
import plumbers from '../../data/Web'
import "./plumbing.css"
import Webdev from '../../data/Web'
const Web = () => {
  const web_services = Webdev.map(plumb =>
    <div className='plumbers_info' key={plumbers.id}>
            <img className='plumber_img' src={plumb.imageurl} alt="" />
            <h2>{plumb.name}</h2>
            <h4>{plumb.experience}</h4>
            <h4>{plumb.charges_per_hour}</h4>
            <h3>{plumb.contact}</h3>
        </div>  
  )
  return (
    <section className='plumbers_services'>
      <div>
        <h2 className='header'>Web Services</h2>
      </div>
      <div className='plumbers'>
        {web_services}
      </div>
      
    </section>
  )
}

export default Web