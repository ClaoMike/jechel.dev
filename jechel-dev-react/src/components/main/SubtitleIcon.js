import React from 'react'
import { FaTerminal } from 'react-icons/fa';
import mainStyles from './mainStyles';

const SubtitleIcon = () => {
    const style = {
        ...mainStyles.iconStyle,
        color: '#3C0753' 
      };
      
      return (
        <FaTerminal style={style}/>
      )
}

export default SubtitleIcon