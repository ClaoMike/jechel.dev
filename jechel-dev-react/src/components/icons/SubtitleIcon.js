import React from 'react'
import { FaTerminal } from 'react-icons/fa';
import appStyle from '../../AppStyle';

const SubtitleIcon = () => {
    const style = {
        ...appStyle.iconStyle,
        color: '#3C0753' 
      };
      
      return (
        <FaTerminal style={style}/>
      )
}

export default SubtitleIcon