import GitHubIcon from '@mui/icons-material/GitHub';
import appStyle from "AppStyle";

const GithubIcon = () => {      
  return (
    <GitHubIcon
      className='about-me-icon'
      style={appStyle.iconConfig}
    />
  );
};

export default GithubIcon;