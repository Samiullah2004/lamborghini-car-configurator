import React, { useState } from 'react'
import { FiCamera, FiGrid, FiMaximize, FiLayers } from 'react-icons/fi';
import IconBar from './iconbar';

const Gallery = () => {
  return (
    <div className='flex hover: items-center rounded-xl overflow-hidden'>
        <IconBar/>
    </div>
  )
}

export default Gallery