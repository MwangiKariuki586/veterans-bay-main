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
        <form>
          <input type="text" name="" id="" placeholder='Enter your fullname' />
          <input type="email" placeholder='Enter your email' />
          <textarea name="" id="" cols="30" rows="5" placeholder='Enter your Message'></textarea>
          <button>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
