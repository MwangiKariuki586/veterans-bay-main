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
        <select className='select_categories' name="" id="">
          <option value="plumbing">Plumbing</option>
          <option value="electrical">Elecctrical</option>
          <option value="software">Software</option>
          <option value="web">Web</option>
          <option value="tutoring">Tutoring</option>
          <option value="consultation">Consultation</option>
          <option value="legal">Legal</option>
          <option value="babycare">Babycare</option>
          <option value="carservices">Car services</option>
          <option value="realestate">Realestate</option>
          <option value="therapy">Therapy</option>
        </select>
        <input className='service-name' type="number" placeholder='years of experience'/>
        <input className='expected-charges' type="number" placeholder='charges/hour' />
        <input className='service-name' type="number" placeholder='phone-number'  />
        <button className='add-service-btn'>Submit</button>
      </form>
    </section>
  )
}

export default Addservice