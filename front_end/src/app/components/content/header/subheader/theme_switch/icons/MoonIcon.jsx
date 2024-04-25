import React from 'react'
import { FaMoon } from 'react-icons/fa';
import SwitchIcon from './SwitchIcon'
import colors from '../../../../../../../themes/colors';

const MoonIcon = () => {
  return (
    <SwitchIcon 
        icon={
            <FaMoon color={colors.theme_switch.moon_icon} />
        } 
    />
  )
}

export default MoonIcon