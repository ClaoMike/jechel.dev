import React from 'react'
import { FaCodeBranch } from 'react-icons/fa';
import appStyle from '../../AppStyle';

const AboutMeIcon = () => {
    const style = {
        ...appStyle.iconStyle,
        color: '#3E3232' 
      };
      
      return (
        <FaCodeBranch style={style}/>
      )
}

export default AboutMeIcon