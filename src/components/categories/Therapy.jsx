import React from 'react'
import plumbers from '../../data/therapy'
import "./plumbing.css"
import Therapists from '../../data/therapy'
const Therapy = () => {
  const therapy_services = Therapists.map(plumb =>
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
        <h2 className='header'>Therapy Services</h2>
      </div>
      <div className='plumbers'>
        {therapy_services}
      </div>
      
    </section>
  )
}

export default Therapy