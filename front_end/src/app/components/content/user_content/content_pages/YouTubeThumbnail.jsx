import React from 'react'
import { Image } from '@chakra-ui/react'

const YouTubeThumbnail = ({thumbnail, description}) => {
  return (
    <Image  src={thumbnail} alt={description} />
  )
}

export default YouTubeThumbnail