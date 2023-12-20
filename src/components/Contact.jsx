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
        <img className='contact-img' src={contact} alt="" />
        <form className='message-us'>
          <input className='inputbox' type="text"  placeholder='Enter your fullname' />
          <input className='inputbox' type="email" placeholder='Enter your email' />
          <textarea className='textareabox' cols="30" rows="5" placeholder='Enter your Message'></textarea>
          <button className='submit-btn'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
