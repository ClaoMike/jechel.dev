import React from 'react'
import { FaCodeBranch } from 'react-icons/fa';
import mainStyles from '../main/mainStyles';

const AboutMeIcon = () => {
    const style = {
        ...mainStyles.iconStyle,
        color: '#3E3232' 
      };
      
      return (
        <FaCodeBranch style={style}/>
      )
}

export default AboutMeIcon