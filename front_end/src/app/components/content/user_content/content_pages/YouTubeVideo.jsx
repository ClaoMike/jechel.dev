import React from 'react'

import { AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, HStack, VStack, Text} from '@chakra-ui/react'

import YouTubeThumbnail from './YouTubeThumbnail'
import YouTubeTitle from './YouTubeTitle'
import YouTubeDescription from './YouTubeDescription'
import YouTubeLocation from './YouTubeLocation'
import YouTubeRedirectLink from './YouTubeRedirectLink'

const YouTubeVideo = ({video}) => {
    return (
        <AccordionItem>
            <AccordionButton>

                <HStack>
                    <YouTubeThumbnail thumbnail={video.thumbnail} description={video.description} />
                    <YouTubeTitle title={video.title}/>
                </HStack>
                
                <AccordionIcon />
            </AccordionButton>

            <AccordionPanel>

                <VStack>
                    <YouTubeDescription description={video.description} />
                    <YouTubeLocation location={video.location} />
                    <YouTubeRedirectLink url={video.url} />
                </VStack>

            </AccordionPanel>
        </AccordionItem>
    )
}

export default YouTubeVideo