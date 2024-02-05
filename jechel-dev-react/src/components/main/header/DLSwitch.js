import Switch from "react-switch";
import { isMobile } from 'react-device-detect';

import useLocalStorage from 'use-local-storage';
import { useState } from 'react';

import DarkModeIcon from '../../icons/DarkModeIcon';
import LightModeIcon from '../../icons/LightModeIcon';

const DLSwitch = () => {
    
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light' )
    const [checked, setChecked] = useState(false);
    
    const switchTheme = ()  => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setChecked(!checked);
        setTheme(newTheme);

        // save colours in index.css and use this to retrieve them
        const rootStyles = getComputedStyle(document.documentElement);
        const myColor = rootStyles.getPropertyValue('--icon-episode');
        console.log(myColor);
    };
    
    return (
        <Switch
            // functionality 
            onChange={switchTheme} 
            checked={checked} 

            // icons
            uncheckedIcon={false}
            checkedIcon={false}

            uncheckedHandleIcon={
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        color: "orange",
                    }}>
                    <DarkModeIcon/>
                </div>
            }

            checkedHandleIcon={
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        color: "orange",
                    }}>
                    <LightModeIcon/>
                </div>
            }

            // design - colours
            offColor="#E8C872"
            offHandleColor="#3468C0"

            onColor="#3468C0"
            onHandleColor="#86A7FC"

            // design - sizes
            handleDiameter={isMobile ? 30 : 40}

            height={isMobile ? 12.5 : 25}
            width={isMobile ? 50 : 70}

            boxShadow="0px 0px 1px 2px #B80000" // always on, except when pressed
            activeBoxShadow="0px 0px 1px 2px #fffc35" // on only when pressed
        />
    );
}

export default DLSwitch;