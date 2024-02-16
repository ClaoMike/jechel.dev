import HtmlIcon from '@mui/icons-material/Html';
import appStyle from "AppStyle";
import { isMobile } from 'react-device-detect';

const HTMLIcon = () => {
  return (
    <HtmlIcon 
        style={appStyle.iconConfig}
        className='html-icon'
        sx={{ fontSize: isMobile ? 30 : 50 }}
    />
  )
}

export default HTMLIcon