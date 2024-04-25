import React from 'react'
import { HStack } from '@chakra-ui/react'
import SubtitleIcon from '@components/content/header/subheader/subtitle_icon/SubtitleIcon'
import Subtitle from '@components/content/header/subheader/Subtitle'
import ThemeSwitch from '@components/content/header/subheader/theme_switch/ThemeSwitch'

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