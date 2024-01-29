import { FaFilm } from 'react-icons/fa';
import appStyle from '../../AppStyle';

const EpisodeIcon = () => {      
  return (
    <FaFilm 
      className='episode-icon' 
      style={appStyle.iconConfig}
    />
  );
};

export default EpisodeIcon;