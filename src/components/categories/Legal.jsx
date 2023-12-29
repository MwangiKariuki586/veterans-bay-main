import React from 'react'
import plumbers from '../../data/legal'
import "./plumbing.css"
import legalservices from '../../data/legal'
const Legal = () => {
  const legal_services = legalservices.map(plumb =>
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
        <h2 className='header'>Legal Services</h2>
      </div>
      <div className='plumbers'>
        {legal_services}
      </div>
      
    </section>
  )
}

export default Legal