import React from 'react'
import { Link } from 'react-router-dom'
import rlist from '../assets/rlist.png'

const Nav = () => {
  return (
    <div>
        <Link to='revuelto' ><div  className='h-14 flex gap-6 items-center text-lg'>
        <img className='h-10' src={rlist} alt="" />
        <h3>Revuelto</h3>
      </div>
      </Link> 
      <Link to='urus' ><div  className='h-14 flex gap-6 items-center text-lg'>
        <img className='h-10' src={rlist} alt="" />
        <h3>Urus</h3>
      </div>
      </Link> 
    </div>
  )
}

export default Nav