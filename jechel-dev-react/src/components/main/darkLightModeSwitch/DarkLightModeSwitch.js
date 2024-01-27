import { useState, useEffect } from 'react';
import { Switch } from '@mui/joy';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import NightsStayRoundedIcon from '@mui/icons-material/NightsStayRounded';
import { Container, Box } from '@mui/material';

import darkLightModeSwitchStyle from './darkLightModeSwitchStyle';
import appStyle from '../../../AppStyle';

const DarkLightModeSwitch = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = darkMode ? appStyle.darkTheme : appStyle.lightTheme;
    const linkTheme = darkMode ? appStyle.linkDarkTheme : appStyle.linkLightTheme;
    
    // Apply styles to the body element
    Object.keys(theme).forEach((style) => {
      document.body.style[style] = theme[style];
    });

    const links = document.querySelectorAll('a');
    links.forEach(link => {
        Object.keys(linkTheme).forEach(style => {
            link.style[style] = linkTheme[style];
        });
    });

    // Cleanup function to remove styles when the component unmounts
    return () => {
      Object.keys(theme).forEach((style) => {
        document.body.style[style] = '';
      });

      const links = document.querySelectorAll('a');
        links.forEach(link => {
            Object.keys(linkTheme).forEach(style => {
                link.style[style] = '';
            });
        });

    };
  }, [darkMode]); // Run whenever the switch state changes

  return (
    <Container style={darkLightModeSwitchStyle.containerConfig}>
      <Box sx={appStyle.horizontalCenterStyle}>
        <Switch
          slotProps={{
            input: { 'aria-label': 'Dark mode' },
            thumb: {
              children: darkMode ? <NightsStayRoundedIcon style={darkLightModeSwitchStyle.darktModeIcon} /> : <WbSunnyRoundedIcon style={darkLightModeSwitchStyle.lightModeIcon} />,
            },
          }}
          checked={darkMode}
          onChange={(event) => setDarkMode(event.target.checked)}
          sx={darkLightModeSwitchStyle.switchConfiguration}
        />
      </Box>
    </Container>
  );
};

export default DarkLightModeSwitch;
