import React from 'react'
import MovieIcon from '@icons/MovieIcon'
import IconTextView from '../IconTextView'


const YouTubeTitle = ({title}) => {
  return (
        <IconTextView icon={<MovieIcon />} text={title} />
  )
}

export default YouTubeTitle