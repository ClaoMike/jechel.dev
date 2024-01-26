import React, { useState } from 'react';
import { Switch } from '@mui/joy';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import NightsStayRoundedIcon from '@mui/icons-material/NightsStayRounded';

const ModeSwitch = () => {
  const [checked, setChecked] = useState(false);

  const lightStyle = {
    color: '#000000' 
  };

  return (
    <>
            <Switch 
                // color={checked ? 'primary' : 'danger'}
                slotProps={{
                    input: { 'aria-label': 'Dark mode' },
                    thumb: {
                    children: checked ? <NightsStayRoundedIcon style={lightStyle}/> : <WbSunnyRoundedIcon style={lightStyle}/>,
                    },
                }}
                checked={checked}
                onChange={(event) => setChecked(event.target.checked)}
                sx={{           
                    "--Switch-trackRadius": "20px",
                    "--Switch-trackWidth": "59px",
                    "--Switch-trackHeight": "30px",
                    "--Switch-thumbSize": "24px",
            // //         '--Switch-thumbBackground': 'rgb(96, 94, 92)',
            // // '--Switch-trackBorderColor': 'rgb(96, 94, 92)',
                }}
            />
    </>
  );
};

export default ModeSwitch;
