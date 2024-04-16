import { isMobile } from 'react-device-detect';

const style = {
    stack: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: isMobile ? '10%' : '35%',
        marginRight: isMobile ? '10%' : '35%',
    },

    username: {
        width: '100%',
    },

    password: {
        width: '100%'
    },

    login: {
        
    },

}

export default style;