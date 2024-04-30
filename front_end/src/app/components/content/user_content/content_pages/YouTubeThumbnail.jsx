import React from 'react'
import { Image } from '@chakra-ui/react'
import { isMobile } from 'react-device-detect'

const YouTubeThumbnail = ({thumbnail, description}) => {
  return (
    <Image  src={thumbnail} alt={description} maxW={isMobile ? "250px" : "300px"} borderRadius="md"/>
  )
}

export default YouTubeThumbnail