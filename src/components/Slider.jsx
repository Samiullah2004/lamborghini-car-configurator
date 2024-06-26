import React, { useContext, useEffect, useState } from 'react'
import ModelElements from './ModelElements'
import logo from '../assets/logo.png'
import downwardArrow from '../assets/downward-arrow.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import {SliderContext} from '../context/SliderContext.jsx'
import Tool from './tools/Tool.jsx'

const Slider = () => {
    const slider = useContext(SliderContext)
    
  return (
    <div className='w-full h-[70vh] lg:h-[100vh]'>
        {/* <img  className='absolute top-[35%] lg:top-[50%] right-1 w-12 cursor-pointer' onClick={slider.goToNextSlide} src={slideRight}  alt="" /> */}
        <div onClick={slider.goToNextSlide} className='absolute hover:duration-500 bg-black top-[50%]  -translate-y-1/2 z-10 lg:top-[50%] right-0 w-8 hover:bg-zinc-200 h-20 justify-center rounded-l-xl flex items-center cursor-pointer'>
        <MdKeyboardArrowRight  size={30} color='white'/>
        </div>
        <div className='w-full h-full'>
            <img  className='w-full h-full object-cover' src={slider.images[slider.currentImageIndex].car} alt="" />
        </div>

        <div onClick={slider.goToBackSlide} className='absolute hover:duration-500 bg-black top-[50%]  -translate-y-1/2 lg:top-[50%] z-10 left-0 w-8 hover:bg-zinc-200 h-20 justify-center rounded-r-xl flex items-center cursor-pointer'>
        <MdKeyboardArrowLeft  size={30} color='white'/>
        </div>

        <div className='absolute bg-zinc-900/50 top-0 w-screen flex flex-col items-center justify-center h-screen'>
            {/* <h4 className='lg:text-5xl text-3xl my-1 italic text-white '>{slider.images[slider.currentImageIndex].name}</h4> */}
            <img width={900} className='ml-5' src={slider.images[slider.currentImageIndex].svg} alt="" />
            <h4 className='italic w-[75vw] text-center text-white  text-sm  lg:text-xl'>{slider.images[slider.currentImageIndex].text}</h4>
            <button className='bg-white text-gray-900 hover:bg-black  hover:text-white hover:border-[1px] hover:border-white px-8 py-2 text-[16px] rounded-xl  font-bold my-4'>ESPLORA</button>
        </div>

        <div className='w-full lg:absolute top-0 overflow-hidden lg:overflow-visible h-56'>
        <ModelElements name={slider.images[slider.currentImageIndex].name} logo={logo} arrow={downwardArrow} />
        </div>
<div className='absolute w-screen bottom-0 px-20 text-sm py-2 bg-black text-white flex items-center justify-center gap-10'>
  <p className='text-center'>{slider.images[slider.currentImageIndex].desc}</p>
  <h3 className='text-yellow-600'>Privacy & Legal</h3>
</div>
        <div className='absolute top-[5%] right-[5%]'>
          <Tool />
        </div>
    </div>
  )
}

export default Slider
