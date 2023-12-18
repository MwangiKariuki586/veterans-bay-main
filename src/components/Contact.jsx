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
        <form className='message-us'>
          <input className='input' type="text" name="" id="" placeholder='Enter your fullname' />
          <input className='input' type="email" placeholder='Enter your email' />
          <textarea className='textarea' name="" id="" cols="30" rows="5" placeholder='Enter your Message'></textarea>
          <button className='submit-btn'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
