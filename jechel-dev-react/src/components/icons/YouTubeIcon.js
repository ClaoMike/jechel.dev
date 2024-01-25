import React from 'react'
import { FaYoutube } from 'react-icons/fa';
import mainStyles from '../main/mainStyles';

const YouTubeIcon = () => {
    const style = {
        ...mainStyles.iconStyle,
        color: '#B80000' 
      };
      
      return (
        <FaYoutube style={style}/>
      )
}

export default YouTubeIcon