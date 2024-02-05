import Switch from "react-switch";
import useLocalStorage from 'use-local-storage';
import { useState } from 'react';

const DLSwitch = () => {
    
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light' )
    const [checked, setChecked] = useState(false);
    
    const switchTheme = ()  => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setChecked(!checked);
        setTheme(newTheme);
    };
    
    return (
        <Switch onChange={switchTheme} checked={checked} />
    );
}

export default DLSwitch;