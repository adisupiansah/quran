import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser } from "react-icons/fa";

const NavigasiBar = () => {
  return (
    <div>
      <div className="navbar bg-blue-500 p-4">
        <div className="container">
            <div className="navbar-icon flex justify-center items-center">
                <GiHamburgerMenu className='icons cursor-pointer fs-2'/>
                <h1 className='text-white font-bold mx-2'>Quran saya</h1>
            </div>
            <div className="navbar-accounr flex justify-center items-center">
                <FaUser className='icons cursor-pointer'/>

            </div>
        </div>
      </div>
    </div>
  )
}

export default NavigasiBar
