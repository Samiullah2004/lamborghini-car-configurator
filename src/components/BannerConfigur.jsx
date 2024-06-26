import React, { useState } from 'react'
import Tool from './tools/Tool'
import { Link } from 'react-router-dom'

const BannerConfigur = ({details}) => {

  return (
    <div className=' w-full h-full absolute top-0 left-0 px-10 py-12  z-0 '>
          <div className='flex items-start justify-between flex-col h-full w-full '>
          <div className='w-full flex justify-between items-start'>
            <div>
            <h4 className='font-extrabold text-6xl text-white'>{details.name}</h4>
            <h4 className='font-extrabold text-6xl text-white'>{details.model}</h4>
            </div>
            <div className='px-6 py-3 rounded-md font-bold texl-lg'>

            <Tool />
            </div>
          </div>


          <div className='w-full flex items-end justify-between'>
            <div className='lg:w-[70%] xl:w-[50%] 2xl:w-[40%] hidden lg:block'>
            <div className='bg-gray-900 w-full flex items-center justify-between rounded-md'>
            <button className={`transition-all ease-in duration-200 py-4 rounded-md w-[49%] text-xs lg:text-sm font-medium ${details.banner ? "text-white" : 'bg-white text-black'}`} onClick={() => details.setBanner(!details.banner)}>AD PERSONAM - ARANCIO APODIS</button>
            <button className={`transition-all ease-in duration-200  py-4 rounded-md w-[49%] text-xs lg:text-sm font-medium ${details.banner ? "bg-white text-black" : 'text-white'}`} onClick={() => details.setBanner(!details.banner)}>BASE OFFER - BIANCO MONOCERUS</button>
            </div>
            <div className='flex w-full justify-between mt-5'>
              <div>
                <p className='mb-1 text-white'>Power</p>
                <p className='text-lg xl:text-3xl text-white font-medium'>{details.power}</p>
              </div>
              <div>
                <p className='mb-1 text-white'>Max Speed</p>
                <p className='text-lg xl:text-3xl text-white font-medium'>{details.speed}</p>
              </div>
              <div>
                <p className='mb-1 text-white'>0-100 km/h</p>
                <p className='text-lg xl:text-3xl text-white font-medium'>{details.km}</p>
              </div>
            </div>
            </div>

            <Link to={details.path}>
            <button className='px-6 py-3 rounded-md bg-white font-bold texl-lg'>CONFIGURA</button>
            </Link>
          </div>
          </div>
        </div>
  )
}

export default BannerConfigur