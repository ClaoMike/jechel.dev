import React from 'react'
import { HStack } from '@chakra-ui/react'
import SubtitleIcon from './subtitle_icon/SubtitleIcon'
import Subtitle from './Subtitle'
import ThemeSwitch from './theme_switch/ThemeSwitch'

const SubHeader = () => {
  return (
    <HStack>
        <SubtitleIcon />
        <Subtitle />
        <ThemeSwitch />
    </HStack>
  )
}

export default SubHeader