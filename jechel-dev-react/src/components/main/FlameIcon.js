import React from 'react'
import { FaHotjar} from 'react-icons/fa';
import mainStyles from './mainStyles';

const FlameIcon = () => {
    const style = {
        ...mainStyles.iconStyle,
        color: '#FF9800' 
      };
      
      return (
        <FaHotjar style={style}/>
      )
}

export default FlameIcon