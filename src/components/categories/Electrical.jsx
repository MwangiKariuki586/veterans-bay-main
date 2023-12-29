import React from 'react'
import plumbers from '../../data/Electrician'
import "./plumbing.css"
import Electricians from '../../data/Electrician'
const Electrical = () => {
  const electrical_services = Electricians.map(plumb =>
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
        <h2 className='header'>Electrical Services</h2>
      </div>
      <div className='plumbers'>
        {electrical_services}
      </div>
      
    </section>
  )
}

export default Electrical