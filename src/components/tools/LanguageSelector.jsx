import React, { useState } from 'react';
import img1 from '../../assets/russia.png'
import img2 from '../../assets/france.png'
import img3 from '../../assets/china.png'
import img4 from '../../assets/german.png'
import img5 from '../../assets/spain.png'
const languages = [
  { name: 'Russian', flag: '🇷🇺', img:   img1},
  { name: 'French', flag: '🇫🇷', img:  img2 },
  { name: 'Chinese', flag: '🇨🇳', img: img3 },
  { name: 'German', flag: '🇩🇪', img:  img4 },
  { name: 'Spanish', flag: '🇪🇸', img: img5 },
];

const LanguageSelector = ({ data }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-[35%] h-[90%]">
        <div className="flex justify-between items-center mb-1">
          <h2 className="text-2xl font-bold">Change language
          </h2>
          <button onClick={() => data.setShow(false)} className="text-white text-2xl rounded-md  bg-black w-10 h-10 hover:bg-white hover:text-black hover:border-[2px]">&times;</button>
        </div>
          <p className='text-gray-400 text-[14px] mb-5 '>Select the language for the configurator
          </p>
        <div  >
          {languages.map((lang, index) => (
            <div key={index} className="flex items-center justify-between mb-2 border-b-[1px] py-2 border-gray-400">
             
            
              <label htmlFor={lang.name} className="ml-3 mb-2 text-md flex items-center">
                <img src={lang.img} alt={`${lang.name} flag`} className="h-7 w-7 mr-5"/>
                {lang.name}
              </label>
              <input
                type="radio"
                name="language"
                id={lang.name}
                value={lang.name}
                onChange={() => setSelectedLanguage(lang.name)}
                className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-6">
          <button className="bg-gray-300 text-gray-700 px-14 py-3 transition-all duration-500 rounded-md hover:bg-gray-400">
            Cancel
          </button>
          <button className="bg-blue-600 text-white px-14 py-3 transition-all duration-500 rounded-md hover:bg-blue-700">
          CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;