import React from 'react'
import { FaMapPin } from 'react-icons/fa';
import appStyle from '../../AppStyle';

const PinPointIcon = () => {
    const style = {
        ...appStyle.iconStyle,
        color: '#B80000' 
      };
      
      return (
        <FaMapPin style={style}/>
      )
}

export default PinPointIcon