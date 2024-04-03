import { isMobile } from 'react-device-detect';

const style = {
    mainStack: {
        borderRadius: '10px',
        width: '80%',
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '20px',
    },

    image: {
        width: '100%',
        margin: isMobile ? '0 auto' : '0',
        overflow: 'hidden', 
        maxWidth: isMobile ? '80%' : '40%',
    },
}

export default style;