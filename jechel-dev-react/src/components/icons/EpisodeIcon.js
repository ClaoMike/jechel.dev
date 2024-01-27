import React from 'react'
import { FaFilm } from 'react-icons/fa';
import appStyle from '../../AppStyle';

const EpisodeIcon = () => {
    const style = {
        ...appStyle.iconStyle,
        color: '#765827' 
      };
      
      return (
        <FaFilm style={style}/>
      )
}

export default EpisodeIcon