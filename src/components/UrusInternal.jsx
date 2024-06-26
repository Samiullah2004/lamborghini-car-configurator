import React, { useState } from 'react'
import downwardArrow from '../assets/downward-arrow.png'
import InternerFunctnality from './InternerFunctnality'
import car01 from '../assets/urus01.jpg'
import car02 from '../assets/urus02.jpg'
import car03 from '../assets/urus03.jpg'
import Gallery from './Gallery'

const UrusInternal = () => {
  let [x,setX] = useState(true)
  let items = [
    {
        id : 0,
        text : 'bianco Leda',
        color : '#002b72',
        car: car01,
    },
    {
        id : 1,
        text : 'Rosso Alala',
        color :'#942826',
        car : car02,
    },
    {
        id : 2,
        text : 'Verde Fauns',
        color : '#3b5215',
        car : car03,
    }
  ]
  return (
    <>
    {
        x ?
    
    <div onClick={() => setX(!x)} className='w-full  bg-black text-white p-4 shadow-sm shadow-gray-700 rounded-md flex items-center justify-between cursor-pointer'>
        <div>
        <h2 className='text-xl'>Internal Modification</h2>
        <h3 className='text-xs '>Internal car seat covers</h3>
        </div>
        <img className='opacity invert w-4 transform rotate-90' src={downwardArrow} alt="" />
        
    </div>
:
    <div>
        <InternerFunctnality details={{ x,setX}} items={items} />
    </div>
    }
    </>
    
  )
}

export default UrusInternal