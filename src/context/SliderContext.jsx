

import React, { createContext, useEffect, useState } from 'react';

import lamborghini from '../assets/lamborghini.jpg'
import lamborghini2 from '../assets/lamborghini2.jpg'
import lamborghini3 from '../assets/lamborghini3.jpg'
import ulist from '../assets/ulist.png'
import rlist from '../assets/rlist.png'
import revueltoOrange from '../assets/internal.jpg'
export const SliderContext = createContext(null);

export const AppProvider = ({ children }) => {
  let [listImage,setListImage] = useState(0)
  const [arr,setArr] = useState(revueltoOrange)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
   
  const images = [
    {
      name: "Revoulto",
      svg: "src/assets/revoulto.svg",
      car: lamborghini,
      text: ' Il primo veicolo elettrificato ad elevate prestazioni - HPEV (High Performance Electrified Vehicle) ',
      show:rlist,
      desc: " Consumo di carburante combinato:11,86 l/100 km; Consumo d'energia combinato:10,1 kWh/100km; Emissioni di CO₂ nel ciclo combinato:276 g/km; Classe di efficienza energetica:G; Consumo di carburante combinato a batteria scarica:17,8 l/100km; Classe di efficienza energetica a batteria scarica:G "
    },
    {
      name: "Urus",
      svg: "src/assets/urus.svg" ,
      car: lamborghini3,
      text: ' The unique blend of Lamborghini DNA and daily usability ',
      show : ulist,
      desc: " I dati relativi al consumo di carburante e alle emissioni di questo veicolo sono in fase di omologazione. ",
    },
    
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        return prevIndex == images.length - 1 ? 0 : prevIndex + 1;
      })
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length])

  const clickImageList = (i) => {
    setListImage(i)
  }
  const goToBackSlide = () => {
    setCurrentImageIndex((prevIndex) => {
      return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
    })
  }
  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) => {
      return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
    })
  }

  const configure = (i) => {
    setArr(i)

  }
 
  return (
    <SliderContext.Provider value={{ images, currentImageIndex,goToBackSlide,goToNextSlide,clickImageList,listImage,configure,setArr,arr}}>
      {children}
    </SliderContext.Provider>
  );
};
 