import React, { useContext, useState } from 'react'
import rlist from '../assets/rlist.png'
import ulist from '../assets/ulist.png'
import { SliderContext } from '../context/SliderContext.jsx'
import { Link, useLocation } from 'react-router-dom'

const ModelElements = ({ name, logo, arrow }) => {
  let [show, setShow] = useState(false)
  let [metch, setMetch] = useState('')
  const slider = useContext(SliderContext)

  let location = useLocation();
  let currentPath = location.pathname;
 
  const dropDown = (name) => {
    setMetch(name)
    setShow(false)
  }
  return (
    <div className='lg:w-60 lg:relative '>
      <div className='bg-gray-900 text-white z-10 w-full absolute flex items-center justify-between p-3 cursor-pointer lg:h-16' onClick={() => setShow(!show)}>
        <div className='flex items-center gap-6'>
          <img className='w-8 filter invert' src={logo} alt="" />
          <h3 className='font-bold'>{metch == '' ? name : metch}</h3>
        </div>
        <img className={`w-4 filter invert transform transition-all ease duration-1000 ${show ? 'rotate-180' : 'rotate-0'}`} src={arrow} alt="" />
      </div>

      <div className={`bg-gray-900 cursor-pointer p-3  text-white z-0 transform -translate-y-[100%] transition-all ease duration-1000 relative top-16 left-0 ${show ? 'translate-y-0' : ''}`}>

        {currentPath == "/revuelto" ? <Link ><div onClick={() => dropDown(element.name)} className={`h-14 flex gap-6 items-center text-lg ${currentPath == "/revuelto" ? 'cursor-not-allowed ' : ''}`}>
          <img className='h-10' src={rlist} alt="" />
          <h3>Revuelto</h3>
        </div>
        </Link> :
          <Link to="/revuelto"><div onClick={() => dropDown(element.name)} className={`h-14 flex gap-6 items-center text-lg ${currentPath == "/revuelto" ? 'cursor-not-allowed ' : ''}`}>
            <img className='h-10' src={rlist} alt="" />
            <h3>Revuelto</h3>
          </div>
          </Link>
        }

        {currentPath == "/urus" ? <Link ><div onClick={() => dropDown(element.name)} className={`h-14 flex gap-6 items-center text-lg ${currentPath == "/urus" ? 'cursor-not-allowed ' : ''}`}>
          <img className='h-10' src={ulist} alt="" />
          <h3>Urus</h3>
        </div>
        </Link> :
          <Link to="/urus"><div onClick={() => dropDown(element.name)} className={`h-14 flex gap-6 items-center text-lg ${currentPath == "/urus" ? 'cursor-not-allowed ' : ''}`}>
            <img className='h-10' src={ulist} alt="" />
            <h3>Urus</h3>
          </div>
          </Link>
        }


      </div>

    </div>
  )
}

export default ModelElements