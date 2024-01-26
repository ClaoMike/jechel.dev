import React, { useState } from 'react';
import { Switch, switchClasses } from '@mui/joy';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import NightsStayRoundedIcon from '@mui/icons-material/NightsStayRounded';

const ModeSwitch = () => {
  const [checked, setChecked] = useState(false);

  const lightModeIconStyle = {
    color: '#D04848' 
  };

  const darktModeIconStyle = {
    color: '#FDE767' 
  };
  
  return (
    <>
        <Switch 
            slotProps={{
                input: { 'aria-label': 'Dark mode' },
                thumb: {
                    children: checked ? <NightsStayRoundedIcon style={darktModeIconStyle}/> : <WbSunnyRoundedIcon style={lightModeIconStyle}/>,
                },
            }}
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
            sx={{
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
            }}
        />
    </>
  );
};

export default ModeSwitch;
