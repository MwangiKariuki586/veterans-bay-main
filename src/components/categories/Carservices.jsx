import React from 'react'
import plumbers from '../../data/plumbing'
import "./plumbing.css"
import car from '../../data/carservices'
const Carservices = () => {
  const car_services = car.map(plumb =>
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
        <h2 className='header'>Car Services</h2>
      </div>
      <div className='plumbers'>
        {car_services}
      </div>
      
    </section>
  )
}

export default Carservices