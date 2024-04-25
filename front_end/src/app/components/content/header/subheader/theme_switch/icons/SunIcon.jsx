import React from 'react'
import SwitchIcon from '@components/content/header/subheader/theme_switch/icons/SwitchIcon'
import { FaSun } from 'react-icons/fa';
import colors from '@themes/colors';

const SunIcon = () => {
  return (
    <SwitchIcon 
        icon={
            <FaSun color={colors.theme_switch.sun_icon} />
        }
    />
  )
}

export default SunIcon