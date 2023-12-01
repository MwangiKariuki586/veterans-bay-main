import React from 'react'
import contact from "../images/call us.jpg"
import "./contact.css"
const Contact = () => {
  return (
    <section id='contact'>
      <div>
        <h2 className='header'>Contact Us</h2>
      </div>
      <div className='contact_form'>
      <img src={contact} alt="" />
      <form action="">
        <input type="text" name="" id="" placeholder='Enter your fullname' />
        <div className="underline"/>
        <input type="email" placeholder='Enter your email' />
        <div className="underline"/>
        <textarea name="" id="" cols="30" rows="5" placeholder='Enter your Message'></textarea>
      </form>
      </div>
      
    </section>
  )
}

export default Contact
