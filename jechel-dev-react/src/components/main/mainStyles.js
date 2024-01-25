// mainStyles.js
import { isMobile } from 'react-device-detect';

const mainStyles = {
    horizontalCenterStyle: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    responsiveTitle: {
      fontSize: 'min(90px, 7vw)',
    },

    linkStyle: {
      textDecoration: 'none', // Set textDecoration to 'none' to remove the underline
    },

    navigationContainer: {
      marginBottom: isMobile ? '20px' : '50px'
    },

    iconStyle: {
      verticalAlign: 'middle', // Adjust the vertical alignment as needed
      marginTop: '-5px', // Add some margin at the top to shift the icons down
    },
  };
  
  export default mainStyles;
  