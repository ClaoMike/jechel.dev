import { useState, useEffect } from 'react';
import { Container, Box } from '@mui/material';
import { Switch } from '@mui/joy';
import DarkModeIcon from '../../icons/DarkModeIcon';
import LightModeIcon from '../../icons/LightModeIcon';

import appStyle from '../../../AppStyle';
import { useMediaQuery } from "react-responsive";

const DarkLightModeSwitch = () => {
  const [isDark, setIsDark] = useState(false);

  const prefersDarkMode = useMediaQuery({ // is it dark or light?
    query: '(prefers-color-scheme: dark)'
  });

  useEffect(() => {
    setIsDark(prefersDarkMode);

  }, [prefersDarkMode]);

  const toggleDarkMode = () => {
    setIsDark(prevIsDark => !prevIsDark);

    if (!isDark) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }

  };

  return (
    <Container style={appStyle.containerConfig}>
      <Box sx={appStyle.horizontalCenterStyle}>
        <Switch
          slotProps={{
            input: { 'aria-label': 'Dark mode' },
            thumb: {
              children: isDark ? <DarkModeIcon /> : <LightModeIcon />,
            },
          }}
          checked={isDark}
          onChange={toggleDarkMode}
          sx={appStyle.switchConfiguration}
        />
      </Box>
    </Container>
  );
};

export default DarkLightModeSwitch;
