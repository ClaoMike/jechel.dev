import React from 'react'
import { Image } from '@chakra-ui/react'
import { isMobile } from 'react-device-detect'

const YouTubeThumbnail = ({thumbnail, description}) => {
  return (
    <Image height='150px'  src={thumbnail} alt={description} borderRadius="md"/>
  )
}

export default YouTubeThumbnail