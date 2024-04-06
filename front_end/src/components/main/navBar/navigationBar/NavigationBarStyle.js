import { isMobile } from 'react-device-detect';

const style = {
    itemsStack: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all .5s',
        position: 'sticky',
        top: '0',
        zIndex: '1000',
    },

    box: {
        transition: 'all .5s',
        width: '100%',
        height: isMobile ? '20px' : '50px',
    },

    nav: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all .5s',
        width: '100%',
    },

}

export default style;