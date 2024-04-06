import HtmlIcon from '@mui/icons-material/Html';
import style from './IconStyle';
import { isMobile } from 'react-device-detect';

const HTMLIcon = () => {
  return (
    <HtmlIcon 
        style={style}
        className='html-icon'
        sx={{ fontSize: isMobile ? 30 : 50 }}
    />
  )
}

export default HTMLIcon