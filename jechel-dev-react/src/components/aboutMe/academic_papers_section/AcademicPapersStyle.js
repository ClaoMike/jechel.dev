import { isMobile } from 'react-device-detect';

const style = {
    marginLeft: isMobile ? '5vw' :'10vw',
    marginRight: isMobile ? '5vw' :'10vw',
}

export default style;