import React from 'react'
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'

import mainStyles from './mainStyles';

const NavigationItem = ({ link, text, icon}) => {
  const [isHovered, setIsHovered] = useState(false);

  const location = useLocation();
  
  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log(true)
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    console.log(false)
  };

  const navLinkStyle = {
    ...mainStyles.linkStyle,
    ...(isHovered ? mainStyles.linkHoverColour : {}), // Apply linkHoverColour if isHovered is true
    position: 'relative',
    textDecoration: 'none', // no border below the links
  };

  
  const activeLinkStyle = {
    borderBottom: '2px solid #000',
  };

  return (
    <>
        <Link 
          to={link} 
          style={{ ...navLinkStyle, ...(location.pathname === link && activeLinkStyle) }}
          // style={isHovered? mainStyles.linkHoverColour : mainStyles.linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {text} {icon}
        </Link>
    </>
  )
}

export default NavigationItem