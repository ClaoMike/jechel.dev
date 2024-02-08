import Switch from "react-switch";
import { isMobile } from 'react-device-detect';
import { useEffect, useState } from 'react';
import { DarkModeIcon, LightModeIcon } from "Components";
import appStyle from "../../../AppStyle";



const DLSwitch = ({theme, setTheme}) => {
    const rootStyles = getComputedStyle(document.documentElement);
    const borderSize = "0px 0px 1px 2px ";

    const offColor        = rootStyles.getPropertyValue('--switch-offColor');
    const offHandleColor  = rootStyles.getPropertyValue('--switch-offHandleColor');
    const onColor         = rootStyles.getPropertyValue('--switch-onColor');
    const onHandleColor   = rootStyles.getPropertyValue('--switch-onHandleColor');
    const boxShadow       = borderSize.concat(rootStyles.getPropertyValue('--switch-boxShadow'));// always on, except when pressed
    const activeBoxShadow = borderSize.concat(rootStyles.getPropertyValue('--switch-activeBoxShadow'));// on only when pressed

    const [checked, setChecked] = useState(false);
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
          const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          setTheme(defaultDark ? 'dark' : 'light');
          setChecked(defaultDark);
        }
      }, [setTheme]);

      const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        window.localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
        setChecked(!checked);
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
                <div style={appStyle.switchIconConfig}>
                    <DarkModeIcon/>
                </div>
            }

            checkedHandleIcon={
                <div style={appStyle.switchIconConfig}>
                    <LightModeIcon/>
                </div>
            }

            // design - colours
            offColor={offColor}
            offHandleColor={offHandleColor}

            onColor={onColor}
            onHandleColor={onHandleColor}

            // design - sizes
            handleDiameter={isMobile ? 30 : 40}

            height={isMobile ? 12.5 : 25}
            width={isMobile ? 50 : 70}

            boxShadow={boxShadow} // always on, except when pressed
            activeBoxShadow={activeBoxShadow} // on only when pressed
        />
  )
}

export default DLSwitch