import React from 'react'
import { Image } from '@chakra-ui/react'

const YouTubeThumbnail = ({thumbnail, description}) => {
  return (
    <Image width='250px' height='150px'  src={thumbnail} alt={description} borderRadius="md"/>

  )
}

export default YouTubeThumbnail