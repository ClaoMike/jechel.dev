import JavascriptIcon from '@mui/icons-material/Javascript';
import style from './IconStyle';
import { isMobile } from 'react-device-detect';

const JSIcon = () => {
  return (
    <JavascriptIcon 
        style={style}
        className='javascript-icon'
        sx={{ fontSize: isMobile ? 30 : 50 }}
    />
  )
}

export default JSIcon