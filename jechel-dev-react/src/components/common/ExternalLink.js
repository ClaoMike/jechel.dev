import PropTypes from 'prop-types'
import mainStyles from '../main/mainStyles'
import { useState } from 'react';

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
          style={isHovered? mainStyles.linkHoverColour : mainStyles.linkStyle}
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