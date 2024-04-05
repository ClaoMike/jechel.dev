import { isMobile } from 'react-device-detect';

const style = {
    title: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '5vw',
        marginRight: '5vw',
    },

    accordion: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    accordionItem: {
        width: '90%',
        maxWidth: '1000px',
    },

    image: {
        width: '100%', // Full width initially
        overflow: 'hidden', // Ensures the rounded corners are visible
        maxWidth: isMobile ? '20%' : '30%', // Adjusted width based on device
    },

}

export default style;