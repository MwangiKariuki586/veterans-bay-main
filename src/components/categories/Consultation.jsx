import React from 'react'
import plumbers from '../../data/Consultants'
import "./plumbing.css"
import consult from '../../data/Consultants'
const Consultation = () => {
  const consoltant_services = consult.map(plumb =>
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
        <h2 className='header'>Consultation Services</h2>
      </div>
      <div className='plumbers'>
        {consoltant_services}
      </div>
      
    </section>
  )
}

export default Consultation