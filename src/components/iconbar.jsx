import React, { useState } from 'react';
import { FiCamera, FiGrid, FiMaximize, FiLayers } from 'react-icons/fi';

const IconBar = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  const icons = [
    { id: 'layers', icon: <FiLayers className="text-white" size={24} />, text: 'ANIMAZIONI' },
    { id: 'maximize1', icon: <FiMaximize className="text-white" size={24} />, text: 'SCENARIO' },
    { id: 'grid', icon: <FiGrid className="text-white" size={24} />, text: 'GALLERIA' },
    { id: 'camera', icon: <FiCamera className="text-white" size={24} />, text: 'ISTANTANEA' },
    { id: 'maximize2', icon: <FiMaximize className="text-white" size={24} />, text: 'SCHERMO&INTERO' },
  ];

  return (
    <div className="flex items-center justify-center cursor-pointer bg-gray-800 p-2 space-x-4">
      {icons.map(({ id, icon, text }) => (
        <div
          key={id}
          className={`group p-2 flex rounded relative transition-all duration-500 ${
            hoveredIcon === id
              ? id === 'maximize2'
                ? 'bg-gray-700 w-48'
                : 'bg-gray-700 w-36'
              : 'w-12'
          }`}
          onMouseEnter={() => handleMouseEnter(id)}
          onMouseLeave={handleMouseLeave}
        >
          {icon}
          {text && (
            <span
              className={`text-white px-8 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                hoveredIcon === id ? 'block' : 'hidden'
              }`}
            >
              {text}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default IconBar;