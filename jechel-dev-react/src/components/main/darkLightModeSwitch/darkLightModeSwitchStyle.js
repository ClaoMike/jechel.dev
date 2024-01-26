import { switchClasses } from '@mui/joy';
import { isMobile } from 'react-device-detect';

const darkLightModeSwitchStyle = {
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
    
};

export default darkLightModeSwitchStyle;