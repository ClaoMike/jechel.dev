import React from 'react';
import { toggleTheme } from '../../states_management/slices/themeSlice'
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@chakra-ui/react';

const ThemeSwitch = () => {
    const theme = useSelector((state) => state.theme.value);
    const dispatch = useDispatch();

    const onChange = () => {
        dispatch(toggleTheme());
    };

    return (
        <Switch isChecked={theme === 'dark'} onChange={onChange} />
    )
}

export default ThemeSwitch