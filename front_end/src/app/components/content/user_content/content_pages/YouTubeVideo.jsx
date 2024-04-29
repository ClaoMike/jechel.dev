import React from 'react'

import { AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, HStack, VStack, Box} from '@chakra-ui/react'

import YouTubeThumbnail from './YouTubeThumbnail'
import YouTubeTitle from './YouTubeTitle'
import YouTubeDescription from './YouTubeDescription'
import YouTubeLocation from './YouTubeLocation'
import YouTubeRedirectLink from './YouTubeRedirectLink'

const YouTubeVideo = ({video}) => {
    return (
        <AccordionItem marginBottom="10px" >
            <AccordionButton border="2px solid red" borderColor="red" borderRadius="xl">

                <HStack spacing="4">
                    <YouTubeThumbnail thumbnail={video.thumbnail} description={video.description} />
                    <YouTubeTitle title={video.title}/>
                    <AccordionIcon />
                </HStack>
                
            </AccordionButton>

            <AccordionPanel>

                <VStack marginBottom="10px">
                    <YouTubeDescription description={video.description} />
                    {video.location && <YouTubeLocation location={video.location} />}
                    <YouTubeRedirectLink url={video.url} />
                </VStack>

                <Box borderBottom="2px solid red" />

            </AccordionPanel>
        </AccordionItem>
    )
}

export default YouTubeVideo