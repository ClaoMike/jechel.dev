import JavascriptIcon from '@mui/icons-material/Javascript';
import appStyle from "AppStyle";
import { isMobile } from 'react-device-detect';

const JSIcon = () => {
  return (
    <JavascriptIcon 
        style={appStyle.iconConfig}
        className='javascript-icon'
        sx={{ fontSize: isMobile ? 30 : 50 }}
    />
  )
}

export default JSIcon