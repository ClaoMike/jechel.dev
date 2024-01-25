import React from 'react'
import { FaMotorcycle } from 'react-icons/fa';
import mainStyles from './mainStyles';

const MotoIcon = () => {
    const style = {
        ...mainStyles.iconStyle,
        color: '#820300'
      };
      
      return (
        <FaMotorcycle style={style}/>
      )
}

export default MotoIcon