import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import appStyle from '../../../AppStyle';

const NavigationItem = ({ link, text, icon}) => {
  const [isHovered, setIsHovered] = useState(false);

  const location = useLocation();
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const borderStyle = {
    ...(location.pathname === link && appStyle.activeLink),
  };

  return (
    <>
        <Link 
          to={link} 
          style={{  ...borderStyle }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {text} {icon}
        </Link>
    </>
  );
};

export default NavigationItem;