import { useState } from 'react';
import { Switch } from '@mui/joy';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import NightsStayRoundedIcon from '@mui/icons-material/NightsStayRounded';
import { Container, Box  } from '@mui/material';

import mainStyles from '../mainStyles';
import darkLightModeSwitchStyle from './darkLightModeSwitchStyle';

const DarkLightModeSwitch = () => {
  const [checked, setChecked] = useState(false);
  
  return (
    <>
        <Container style={darkLightModeSwitchStyle.containerConfig}>
            <Box sx={mainStyles.horizontalCenterStyle}>
                <Switch 
                    slotProps={{
                        input: { 'aria-label': 'Dark mode' },
                        thumb: {
                            children: checked ? <NightsStayRoundedIcon style={darkLightModeSwitchStyle.darktModeIcon}/> : <WbSunnyRoundedIcon style={darkLightModeSwitchStyle.lightModeIcon}/>,
                        },
                    }}
                    checked={checked}
                    onChange={(event) => setChecked(event.target.checked)}
                    sx={darkLightModeSwitchStyle.switchConfiguration}
                />
            </Box>
        </Container>
    </>
  );
};

export default DarkLightModeSwitch;
