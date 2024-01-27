import React from 'react'
import { FaAlignCenter} from 'react-icons/fa';
import appStyle from '../../AppStyle';

const TextIcon = () => {
    const style = {
        ...appStyle.iconStyle,
        color: '#43766C' 
      };
      
      return (
        <FaAlignCenter style={style}/>
      )
}

export default TextIcon