import Switch from "react-switch";
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
            handleDiameter={40}

            // height={40}
            width={70}
        />
    );
}

export default DLSwitch;