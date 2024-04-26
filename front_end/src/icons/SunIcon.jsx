import React from 'react'
import SwitchIcon from '@icons/SwitchIcon'
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