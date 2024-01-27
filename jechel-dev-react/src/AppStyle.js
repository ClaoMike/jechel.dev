import { isMobile } from 'react-device-detect';

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

};

export default appStyle;