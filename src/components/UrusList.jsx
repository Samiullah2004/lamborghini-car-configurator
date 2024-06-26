import React, { useContext } from 'react'
import { SliderContext } from '../context/SliderContext.jsx'

const UrusList = ({img}) => {
  const slider = useContext(SliderContext)
  console.log(slider.listImage)
  return (
    <div className='absolute top-16 z-0 w-60'>
        <img className={`w-full h-[30vh] cursor-pointer ${slider.listImage == 0 && "bg-white"}`} onClick={() => slider.clickImageList(0)} src={img.u} alt="" />
        <img className={`w-full cursor-pointer h-[30vh] ${slider.listImage == 1 && "bg-white"  }`} onClick={() => slider.clickImageList(1)} src={img.u1} alt="" />
        <img className={`w-full cursor-pointer h-[30vh] ${slider.listImage == 2 && "bg-white"  }`} onClick={() => slider.clickImageList(2)} src={img.u2} alt="" />
    </div>
  )
}

export default UrusList