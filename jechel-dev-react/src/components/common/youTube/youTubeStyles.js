import { isMobile } from 'react-device-detect';

const latestStyles = {
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
};

export default latestStyles;