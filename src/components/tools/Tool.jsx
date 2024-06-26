import React, { useState } from 'react'
import search from '../../assets/code.png'
import countries from '../../assets/world.png'
import lightmood from '../../assets/brightness.png'
import darkmood from '../../assets/night-mode.png'
import { useLocation } from 'react-router-dom'
import LanguageSelector from './LanguageSelector'
import LCodeConfigurator from './LCodeConfigurator '
const Tool = () => {
  let [moodevent,setMoodEvent] = useState(false)
  let [show,setShow] = useState(false)
  let [showL,setShowL] = useState(false)
   const moodChange = () => {
     setMoodEvent(!moodevent)
   }
    
  if(moodevent) {
    document.body.style.opacity = "0.3"
    document.body.style.backgroundColor = "black"
  }
  if(!moodevent) {
     document.body.style.opacity = "10"
    document.body.style.backgroundColor = "white"

   }
  return (
    <div className=''>
        <div onClick={() => setShow(true)}  className='w-12 h-12 bg-gray-900 flex items-center justify-center rounded-t-md cursor-pointer hover:rounded-t-md  hover:bg-white '>
        <img className='w-full p-3 filter invert hover:filter-none' src={countries} alt="" />
        </div>
        <div onClick={() => setShowL(true)} className='w-12 h-12 bg-gray-900 flex items-center justify-center border-y-[1px] border-gray-50 cursor-pointer  hover:bg-white' >
        <img className='w-full p-3 filter invert hover:filter-none' src={search} alt="" />
        </div>
        <div className='w-12 h-12 bg-gray-900 flex items-center justify-center rounded-b-md cursor-pointer hover:rounded-b-md hover:bg-white'>
        <img onClick={() => moodChange()} className='w-full p-3 filter invert hover:filter-none' src={moodevent ? lightmood : darkmood} alt="" />
        </div>

        <div className={`${show ? "" : "hidden"}`}>
        <LanguageSelector data={{show,setShow}} />
        </div>

        <div className={`${showL ? "" : "hidden"}`}>
          <LCodeConfigurator data={{showL,setShowL}} />
        </div>
    </div>
  )
}

export default Tool
