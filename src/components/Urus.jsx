import React, { useContext, useState } from 'react'
import ModelElements from './ModelElements'
import { SliderContext } from '../context/SliderContext.jsx'
import logo from '../assets/logo.png'
import downwardArrow from '../assets/downward-arrow.png'
import urusRed from '../assets/urusRed.jpg'
import urusGray from '../assets/urusGray.jpg'
import urusGreen from '../assets/urusGreen.jpg'
import u from '../assets/u.png'
import u2 from '../assets/u2.png'
import u1 from '../assets/u1.png'
import urusWhite1 from '../assets/uruswhite1.jpg'
import Banner from './Banner.jsx'
import UrusList from './UrusList.jsx'
import BannerConfigur from './BannerConfigur.jsx'


const Urus = () => {
  let [banner, setBanner] = useState(false)
  let arr = [urusRed, urusGreen, urusGray, urusWhite1]
  const slider = useContext(SliderContext)
  return (
    <div className='relative w-full flex overflow-hidden'>
      <div className='w-60 h-[100vh] bg-gray-900 hidden lg:block'>
        <div className='z-10 relative '><ModelElements name="Urus" logo={logo} arrow={downwardArrow} /></div>
        <UrusList img={{ u, u1, u2 }} />
      </div>

      <div className='w-full h-[100vh] relative'>
        <Banner img={banner ? urusWhite1 : arr[slider.listImage]} />
        <BannerConfigur details={{ name: 'Urus', model: 'SE', power: '800 CV', speed: '>312 Km/h',path:'/urus/config', km: '3.5 S', banner, setBanner }} />
      </div>
    </div>
  )
}

export default Urus