import React from 'react'
import { AccordionIcon } from '@chakra-ui/react'

import YouTubeThumbnail from './yt/YouTubeThumbnail'
import YouTubeTitle from './yt/YouTubeTitle'

const AccordionButtonContent = ({thumbnail, description, title }) => {
  return (
    <>
        <YouTubeThumbnail thumbnail={thumbnail} description={description} />
        <YouTubeTitle title={title}/>
        <AccordionIcon />
    </>
  )
}

export default AccordionButtonContent