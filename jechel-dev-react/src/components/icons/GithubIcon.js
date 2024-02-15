import GitHubIcon from '@mui/icons-material/GitHub';
import appStyle from "AppStyle";

const GithubIcon = () => {      
  return (
    <GitHubIcon
      className='github-icon'
      style={appStyle.iconConfig}
    />
  );
};

export default GithubIcon;