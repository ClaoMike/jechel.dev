import React from 'react'
import { FaFilm } from 'react-icons/fa';
import mainStyles from './mainStyles';

const EpisodeIcon = () => {
    const style = {
        ...mainStyles.iconStyle,
        color: '#765827' 
      };
      
      return (
        <FaFilm style={style}/>
      )
}

export default EpisodeIcon