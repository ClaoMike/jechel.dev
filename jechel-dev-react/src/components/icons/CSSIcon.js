import CssIcon from '@mui/icons-material/Css';
import appStyle from "AppStyle";
import { isMobile } from 'react-device-detect';

const CSSIcon = () => {
  return (
    <CssIcon
        style={appStyle.iconConfig}
        className='css-icon'
        sx={{ fontSize: isMobile ? 30 : 50 }}
    />
  )
}

export default CSSIcon