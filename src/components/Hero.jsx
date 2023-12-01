import React from 'react'
import './hero.css'
import prof from '../images/prof.jpg'
const Hero = () => {
  return (
    <section id='hero' className='hero' >
        <div className="intro">
            <h1>
                Your Number one GoTo when you need a service done
            </h1>
            <p>You name a service and in a minute we'll bring it closer to you.
                Our team of professionals is always ready to repair or help you customize products to your desire. 
            </p>
            <a href="#categories">
                <button>Get Started</button>
            </a>
        </div>
        <div className="prof">
            <img src={prof} alt="" />
        </div>
  </section>
  )
}

export default Hero
