import React, { useContext, useState } from 'react'
import ModelElements from './ModelElements'
import { SliderContext } from '../context/SliderContext.jsx'
import logo from '../assets/logo.png'
import downwardArrow from '../assets/downward-arrow.png'
import RevueltoOrange from '../assets/revueltoOrange.jpg'
import RevueltoWhite from '../assets/revueltoWhite.jpg'
import Banner from './Banner.jsx'
import RevueltoList from './RevueltoList'
import BannerConfigur from './BannerConfigur.jsx'


const Revuelto = () => {
  let [banner,setBanner] = useState(false)
  const slider = useContext(SliderContext)
  return (

    <div className='relative w-full flex revuelto'>
      <div className='w-60 h-[100vh] bg-gray-900 hidden lg:block'>
        <div className='z-10 relative'><ModelElements name="Revuelto" logo={logo} arrow={downwardArrow} /></div>
        <RevueltoList img={{RevueltoOrange}} />
        
      </div>

      <div className='w-full h-[100vh] relative'>
        <Banner img={banner ? RevueltoWhite : RevueltoOrange} />
        <BannerConfigur details={{name : 'Revuelto',power:'1015 CV',speed:'>350 Km/h',path:'/revuelto/config',km:'2.5 S',banner,setBanner}} />
      </div>
    </div>
  )
}

export default Revuelto