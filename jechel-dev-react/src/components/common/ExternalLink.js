import PropTypes from 'prop-types'
import { useState } from 'react';
import appStyle from '../../AppStyle';

const ExternalLink = ({link, text, icon}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={isHovered? appStyle.linkHoverColour : appStyle.linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          >{text} {icon}
        </a>
    </>
  )
}

ExternalLink.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }
  

export default ExternalLink