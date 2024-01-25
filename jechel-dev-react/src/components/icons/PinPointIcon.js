import React from 'react'
import { FaMapPin } from 'react-icons/fa';
import mainStyles from '../main/mainStyles';

const PinPointIcon = () => {
    const style = {
        ...mainStyles.iconStyle,
        color: '#B80000' 
      };
      
      return (
        <FaMapPin style={style}/>
      )
}

export default PinPointIcon