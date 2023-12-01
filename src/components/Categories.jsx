import React from 'react'
import './categories.css'
import { GiKitchenTap } from 'react-icons/gi';
import { MdElectricBolt } from 'react-icons/md';
import { SiBmcsoftware } from 'react-icons/si';
import { CiCircleMore } from 'react-icons/ci';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import { GoLaw } from 'react-icons/go';
import { TbBabyCarriage } from 'react-icons/tb';
import { PiPoliceCarDuotone } from 'react-icons/pi';
import { MdOutlineRealEstateAgent } from 'react-icons/md';
import { RiPsychotherapyLine } from 'react-icons/ri';
import { SiWebmoney } from 'react-icons/si';
const Categories = () => {
  return (
    <section id='categories' className="categories">
      <div>
        <h2 className='header'>Categories</h2>
      </div>
      <div className="services">
        <div className="service">
          <div className="icon">
            <GiKitchenTap/>
          </div>
          <p>
            Plumbing
          </p>
        </div>
        <div className="service">
          <div className="icon">
            <MdElectricBolt/>
          </div>
          <p>
            Electrical
          </p>
        </div>
        <div className="service">
          <div className="icon">
            <SiBmcsoftware/>
          </div>
          <p>
            Software
          </p>
        </div>
        <div className="service">
          <div className="icon">
            <SiWebmoney/>
          </div>
          <p>
            Web
          </p>
        </div>
        <div className="service">
          <div className="icon">
            <FaChalkboardTeacher/>
          </div>
          <p>
            Tutoring
          </p>
        </div>
        <div className="service">
          <div className="icon">
            <MdOutlinePhoneInTalk/>
          </div>
          <p>
            Consultation
          </p>
        </div>
        <div className="service">
          <div className="icon">
            <GoLaw/>
          </div>
          <p>
            Legal services
          </p>
        </div>
        <div className="service">
          <div className="icon">
            <TbBabyCarriage/>
          </div>
          <p>
            Baby Care
          </p>
        </div>
        <div className="service">
          <div className="icon">
            <PiPoliceCarDuotone/>
          </div>
          <p>
            Car sevices
          </p>
        </div>
        <div className="service">
          <div className="icon">
            <MdOutlineRealEstateAgent/>
          </div>
          <p>
            Real Estate
          </p>
        </div>
        <div className="service">
          <div className="icon">
            <RiPsychotherapyLine/>
          </div>
          <p>
            Therapy
          </p>
        </div>
        <div className="service">
          <div className="icon">
            <CiCircleMore/>
          </div>
          <p>
            More
          </p>
        </div>
      </div>
  </section>
  )
}

export default Categories
