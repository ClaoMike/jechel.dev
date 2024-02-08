import { FaYoutube } from 'react-icons/fa';
import appStyle from "AppStyle";

const YouTubeIcon = () => {
  return (
    <FaYoutube 
      className='youtube-icon'
      style={appStyle.iconConfig}
    />
  );
};

export default YouTubeIcon;