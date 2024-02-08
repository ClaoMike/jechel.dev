import { FaCodeBranch } from 'react-icons/fa';
import appStyle from "AppStyle";

const AboutMeIcon = () => {      
  return (
    <FaCodeBranch 
      className='about-me-icon'
      style={appStyle.iconConfig}
    />
  );
};

export default AboutMeIcon;