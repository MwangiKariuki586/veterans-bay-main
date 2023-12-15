import React from 'react'
import "./Addservice.css"
const Addservice = () => {
  return (
    <section className='add-service'>
      <div>
        <h2 className='header'>Add service</h2>
      </div>
      <form>
        <input style={{width:"350px"}} type="text" placeholder='Name of service' />
        <input style={{width:"350px"}} type="file" name="" id="" />
        <input style={{width:"350px"}} type="text" placeholder='Expected charges' />
        <button>Submit</button>
      </form>
    </section>
  )
}

export default Addservice