import React from 'react'
import YouTubeIcon from '@/icons/YouTubeIcon'
import { LinkBox, LinkOverlay } from '@chakra-ui/react'
import IconTextView from './IconTextView'

const YouTubeRedirectLink = ({url}) => {
    return (
        <LinkBox as='article'>
            <LinkOverlay href={url} target="_blank" rel="noopener noreferrer">
                <IconTextView icon={<YouTubeIcon />} text={'Watch it on YouTube'} />
            </LinkOverlay>
        </LinkBox>
    )
}

export default YouTubeRedirectLink