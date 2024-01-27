import React from 'react'
import { FaHotjar} from 'react-icons/fa';
import appStyle from '../../AppStyle';

const FlameIcon = () => {
    const style = {
        ...appStyle.iconStyle,
        color: '#FF9800' 
      };
      
      return (
        <FaHotjar style={style}/>
      )
}

export default FlameIcon