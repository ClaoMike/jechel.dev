import React from 'react'
import IconTextView from '../IconTextView'
import LocationIcon from '@/icons/LocationIcon'

const YouTubeLocation = ({location}) => {
  return (
    <IconTextView icon={<LocationIcon />} text={location} />
  )
}

export default YouTubeLocation