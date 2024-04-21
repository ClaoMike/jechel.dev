import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, useColorMode } from '@chakra-ui/react';

import { toggleTheme } from '../../states_management/slices/themeSlice'

const ThemeSwitch = () => {
    const theme = useSelector((state) => state.theme.value);
    const dispatch = useDispatch();

    const { toggleColorMode } = useColorMode()

    const onChange = () => {
        dispatch(toggleTheme());
        toggleColorMode();
    };

    return (
        <Switch isChecked={theme === 'dark'} onChange={onChange} />
    )
}

export default ThemeSwitch