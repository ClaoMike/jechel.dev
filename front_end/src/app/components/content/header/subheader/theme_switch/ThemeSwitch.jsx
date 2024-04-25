import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '@slices/themeSlice';

import { useColorMode } from '@chakra-ui/react';
import Switch from "react-switch";

import MoonIcon from '@components/content/header/subheader/theme_switch/icons/MoonIcon';
import SunIcon from '@components/content/header/subheader/theme_switch/icons/SunIcon';
import style from '@components/content/header/subheader/theme_switch/ThemeSwitchStyle';

const ThemeSwitch = () => {
    // Redux management
    const theme = useSelector((state) => state.theme.value); // redux theme state
    const dispatch = useDispatch();

    // ChakraUI theme state
    const { colorMode, toggleColorMode } = useColorMode()

    // if ChakraUI saved the theme from before the refresh, update its value to match the browser
    useEffect(() => {
        if (theme !== colorMode) {
            toggleColorMode();
        }
    }, [theme, colorMode]);

    // when toggled, switch themes
    const onChange = () => {
        dispatch(toggleTheme());
        toggleColorMode();
    };

    return (
        <Switch 
            checked={theme === 'dark'} 
            onChange={onChange} 

            uncheckedIcon={false}
            checkedIcon={false}

            uncheckedHandleIcon={
                <SunIcon />
            }

            checkedHandleIcon={
                <MoonIcon />
            }

            offColor={style.offColor}
            offHandleColor={style.offHandleColor}

            onColor={style.onColor}
            onHandleColor={style.onHandleColor}

            boxShadow={style.boxShadow}
            activeBoxShadow={style.activeBoxShadow}
        />
    )
}

export default ThemeSwitch