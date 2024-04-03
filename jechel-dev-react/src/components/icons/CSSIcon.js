import CssIcon from '@mui/icons-material/Css';
import style from './IconStyle';
import { isMobile } from 'react-device-detect';

const CSSIcon = () => {
  return (
    <CssIcon
        style={style}
        className='css-icon'
        sx={{ fontSize: isMobile ? 30 : 50 }}
    />
  )
}

export default CSSIcon