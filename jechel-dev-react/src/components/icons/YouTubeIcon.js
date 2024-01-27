import React from 'react'
import { FaYoutube } from 'react-icons/fa';
import appStyle from '../../AppStyle';

const YouTubeIcon = () => {
    const style = {
        ...appStyle.iconStyle,
        color: '#B80000' 
      };
      
      return (
        <FaYoutube style={style}/>
      )
}

export default YouTubeIcon