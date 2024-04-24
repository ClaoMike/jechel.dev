import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useColorMode } from '@chakra-ui/react';
import Switch from "react-switch";

import { FaSun, FaMoon } from 'react-icons/fa';

import { toggleTheme } from '../../states_management/slices/themeSlice'

const ThemeSwitch = () => {
    const theme = useSelector((state) => state.theme.value);
    const dispatch = useDispatch();
    const { colorMode, toggleColorMode } = useColorMode()

    useEffect(() => {
        if (theme !== colorMode) {
            toggleColorMode();
        }
    }, [theme, colorMode]);

    const onChange = () => {
        dispatch(toggleTheme());
        toggleColorMode();
    };

    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    };

    return (
        <Switch 
            checked={theme === 'dark'} 
            onChange={onChange} 

            uncheckedIcon={false}
            checkedIcon={false}

            uncheckedHandleIcon={
                <div style={style}>
                    <FaSun/>
                </div>
            }

            checkedHandleIcon={
                <div style={style}>
                    <FaMoon/>
                </div>
            }

            offColor={'#89CFF3'}
            offHandleColor={'#89CFF3'}

            onColor={'#0C356A'}
            onHandleColor={'#0C356A'}

            boxShadow={'0 0 2px 3px #647D87'}
            activeBoxShadow={'0 0 2px 3px #FFC436'}
        />
    )
}

export default ThemeSwitch