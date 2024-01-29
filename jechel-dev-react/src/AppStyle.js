import { isMobile } from 'react-device-detect';
import { switchClasses } from '@mui/joy';

const appStyle = {
    horizontalCenterStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    responsiveTitle: {
        fontSize: 'min(90px, 7vw)',
        marginBottom: '20px'
    },

    navigationContainer: {
        marginBottom: isMobile ? '20px' : '50px'
    },
  
    // youtube
    paperStyle: {
        borderRadius: '10px', // Adjust the value as needed for rounded borders
        width: '80%', // Default width is 80% of the screen width
        maxWidth: '1000px', // Maximum width is 1000px
        margin: '0 auto', // Center the Paper horizontally
        padding: '20px', // Add padding as needed
    },
    
    imgContainerStyle: {
        width: '100%', // Full width initially
        maxWidth: isMobile ? '80%' : '40%', // Adjusted width based on device
        margin: isMobile ? '0 auto' : '0', // Center the image horizontally on mobile
        overflow: 'hidden', // Ensures the rounded corners are visible
    },
    
    roundedImageStyle: {
        width: '100%', // Full width initially
        height: 'auto', // Maintain the original aspect ratio
        borderRadius: '10px', // Adjust the value as needed for rounded corners
    },
    //

    // switch
    switchConfiguration: {
        // sizes
        "--Switch-trackRadius": isMobile ? '20px' : "20px",
        "--Switch-trackWidth": isMobile ? '59px' : "70px",
        "--Switch-trackHeight": isMobile ? '20px' : "30px",
        "--Switch-thumbSize": isMobile ? '24px' : "35px",

        // colours
        // unchecked (default)
        '--Switch-trackBackground': '#83C0C1', 
        '--Switch-thumbBackground': '#FFFFFF',
        '&:hover': {
            '--Switch-trackBackground': '#0A1D56',
        },

        // checked
        [`&.${switchClasses.checked}`]: {
            '--Switch-trackBackground': '#0A1D56',
            '&:hover': {
                '--Switch-trackBackground': '#83C0C1',
            },
        },
    },

    containerConfig: {
        marginBottom: isMobile ? '20px' : '30px'
    },

};

export default appStyle;