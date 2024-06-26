import React from 'react'

import CommentIcon from '@/icons/CommentIcon'
import IconTextView from '../IconTextView'

const YouTubeDescription = ({description}) => {
  return (
    <IconTextView icon={<CommentIcon />} text={description} />
  )
}

export default YouTubeDescription