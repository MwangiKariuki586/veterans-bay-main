import React from 'react'
import plumbers from '../../data/plumbing'
import "./plumbing.css"
const Plumbing = () => {
  const plumbing_services = plumbers.map(plumb =>
    <div key={plumbers.id}>
            <img src={plumb.imageurl} alt="" />
            <h3>{plumb.name}</h3>
            <h3>{plumb.experience}</h3>
            <h3>{plumb.charges_per_hour}</h3>
            <h5>{plumb.contact}</h5>
        </div>  
  )
  return (
    <section className='plumbers_services'>
        {plumbing_services}
    </section>
  )
}

export default Plumbing