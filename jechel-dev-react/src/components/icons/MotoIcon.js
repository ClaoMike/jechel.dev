import React from 'react'
import { FaMotorcycle } from 'react-icons/fa';
import appStyle from '../../AppStyle';

const MotoIcon = () => {
    const style = {
        ...appStyle.iconStyle,
        color: '#820300'
      };
      
      return (
        <FaMotorcycle style={style}/>
      )
}

export default MotoIcon