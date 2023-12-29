import React from 'react'
import "./Addservice.css"
const Addservice = () => {
  const maxCheck = () => {
    if(this.value.length > 10){
      this.value.slice(0,10)
    }
  }
  return (
    <section className='add-service'>
      <div>
        <h2 className='header'>Add service</h2>
      </div>
      <form className='add-service-form'>
        <input className='service-name' maxlength="10" type="text" placeholder='Enter your name'/>
        <input className='import-image' type="file" name="" id="" placeholder='select an image'/>
        <input className='service-name' type="number" placeholder='years of experience'/>
        <input className='expected-charges' type="number" placeholder='charges/hour' />
        <input className='service-name' type="number" placeholder='phone-number'  />
        <button className='add-service-btn'>Submit</button>
      </form>
    </section>
  )
}

export default Addservice