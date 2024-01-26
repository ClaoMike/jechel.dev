import { switchClasses } from '@mui/joy';

const darkLightModeSwitchStyle = {
    switchConfiguration: {
        // sizes
        "--Switch-trackRadius": "20px",
        "--Switch-trackWidth": "59px",
        "--Switch-trackHeight": "30px",
        "--Switch-thumbSize": "24px",

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
    }
    
};

export default darkLightModeSwitchStyle;