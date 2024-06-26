import React, { useContext } from 'react'

import { SliderContext } from '../context/SliderContext.jsx'

const RevueltoList = ({img}) => {
    const slider = useContext(SliderContext)
  return (
    <div className='absolute top-16 z-0 w-60 '>
        <img className='w-full' src={img.RevueltoOrange} alt="" />
        
        </div>
  )
}

export default RevueltoList