import Switch from "react-switch";
import { isMobile } from 'react-device-detect';

import { useEffect, useState } from 'react';

import DarkModeIcon from '../../icons/DarkModeIcon';
import LightModeIcon from '../../icons/LightModeIcon';

const DLSwitch = ({theme, setTheme}) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
          const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          setTheme(defaultDark ? 'dark' : 'light');
          setChecked(defaultDark);
        }

         // save colours in index.css and use this to retrieve them
        //  const rootStyles = getComputedStyle(document.documentElement);
        //  const myColor = rootStyles.getPropertyValue('--icon-episode');
        //  console.log(myColor);

      }, []);

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
  )
}

export default DLSwitch