import React from 'react'
import "./Addservice.css"
const Addservice = () => {
  return (
    <section className='add-service'>
      <div>
        <h2 className='header'>Add service</h2>
      </div>
      <form className='add-service-form'>
        <input className='service-name' type="text" placeholder='Name of service' />
        <input className='import-image' type="file" name="" id="" />
        <input className='expected-charges' type="number" placeholder='Expected charges' />
        <button className='add-service-btn'>Submit</button>
      </form>
    </section>
  )
}

export default Addservice