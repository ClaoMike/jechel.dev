import { isMobile } from 'react-device-detect';
import { switchClasses } from '@mui/joy';

const common = {
    fontFamily: 'Courier New, monospace',
    fontSize: 'min(30px, 4vw)',
    margin: '0px',
    padding: '0px',
};

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
  
    iconStyle: {
        verticalAlign: 'middle', // Adjust the vertical alignment as needed
        marginTop: '-5px', // Add some margin at the top to shift the icons down
    },
  
    linkHoverColour: {
        textDecoration: 'none', // Set textDecoration to 'none' to remove the underline
        color: '#FFA732',
    },
  
    flameColour: {
        color: '#FF9800',
    },

    lightTheme: {
        ...common,
        backgroundColor: '#FFFFFF',
        color: '#000000',
    },

    darkTheme: {
        ...common,
        backgroundColor: '#000000',
        color: '#FFFFFF',
    },

    linkLightTheme: {
        // color: '#3C0753'
        color: '#E9A8F2'
    },

    linkDarkTheme: {
        color: '#43766C',
    },
    // youtube
    paperStyle: {
        backgroundColor: 'white',
        borderRadius: '10px', // Adjust the value as needed for rounded borders
        width: '80%', // Default width is 80% of the screen width
        maxWidth: '1000px', // Maximum width is 1000px
        margin: '0 auto', // Center the Paper horizontally
        padding: '20px', // Add padding as needed
        boxShadow: '0 0 100px 0 rgba(60, 7, 83, 0.5)' // shadow border
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

    lightModeIcon: {
        color: '#D04848' 
    },
    
    darktModeIcon: {
        color: '#FDE767' 
    },

    containerConfig: {
        marginBottom: isMobile ? '20px' : '30px'
    },
    //
};

export default appStyle;