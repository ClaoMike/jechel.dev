import { useState, useEffect } from 'react';
import { Switch } from '@mui/joy';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import NightsStayRoundedIcon from '@mui/icons-material/NightsStayRounded';
import { Container, Box } from '@mui/material';

import mainStyles from '../mainStyles';
import darkLightModeSwitchStyle from './darkLightModeSwitchStyle';
import main from '../../../AppStyle';

const DarkLightModeSwitch = () => {
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    const theme = checked ? main.darkTheme : main.lightTheme;
    
    // Apply styles to the body element
    Object.keys(theme).forEach((style) => {
      document.body.style[style] = theme[style];
    });

    // Cleanup function to remove styles when the component unmounts
    return () => {
      Object.keys(theme).forEach((style) => {
        document.body.style[style] = '';
      });
    };
  }, [checked]); // Run whenever the switch state changes

  return (
    <Container style={darkLightModeSwitchStyle.containerConfig}>
      <Box sx={mainStyles.horizontalCenterStyle}>
        <Switch
          slotProps={{
            input: { 'aria-label': 'Dark mode' },
            thumb: {
              children: checked ? <NightsStayRoundedIcon style={darkLightModeSwitchStyle.darktModeIcon} /> : <WbSunnyRoundedIcon style={darkLightModeSwitchStyle.lightModeIcon} />,
            },
          }}
          checked={checked}
          onChange={(event) => setChecked(event.target.checked)}
          sx={darkLightModeSwitchStyle.switchConfiguration}
        />
      </Box>
    </Container>
  );
};

export default DarkLightModeSwitch;
