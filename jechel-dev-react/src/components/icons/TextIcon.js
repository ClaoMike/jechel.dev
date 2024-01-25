import React from 'react'
import { FaAlignCenter} from 'react-icons/fa';
import mainStyles from '../main/mainStyles';

const TextIcon = () => {
    const style = {
        ...mainStyles.iconStyle,
        color: '#43766C' 
      };
      
      return (
        <FaAlignCenter style={style}/>
      )
}

export default TextIcon