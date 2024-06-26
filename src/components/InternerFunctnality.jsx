import React, { useContext } from 'react'
import arrow from '../assets/downward-arrow.png'
import downwardArrow from '../assets/arrow.png'
import { SliderContext } from '../context/SliderContext'
const InternerFunctnality = ({ details,items }) => {
    let slide = useContext(SliderContext)
     
    return (
        <div>
            <img onClick={() => details.setX(!details.x)} className='w-6 lg:filter lg:invert  cursor-pointer my-4' src={downwardArrow} alt="" />

            <div>
                {items.map((ele,index) => {
                    return <div onClick={() => slide.configure(ele.car)} key={index} className='w-full my-2 bg-black text-white p-4 shadow-sm shadow-gray-700 rounded-md flex items-center justify-between cursor-pointer'>
                    <div className='flex items-center gap-5'>
                    <div className='add' style={{backgroundColor:ele.color}}></div>
                    <h3>{ele.text}</h3>
                    </div>
                </div>
                })}
            </div>
            
        </div>
    )
}

export default InternerFunctnality