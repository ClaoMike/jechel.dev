import React from 'react'

import { AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Image, HStack, VStack, Text} from '@chakra-ui/react'

import YouTubeThumbnail from './YouTubeThumbnail'

const YouTubeVideo = ({video}) => {
    return (
        <AccordionItem>
            <AccordionButton>

                <HStack>
                    <YouTubeThumbnail thumbnail={video.thumbnail} description={video.description} />
                    <Text >{video.title}</Text>
                </HStack>

                <AccordionIcon />
            </AccordionButton>

            <AccordionPanel>

                <VStack>
                    <Text >{video.description}</Text>
                    <Text >{video.location}</Text>
                    <Text >{video.url}</Text>
                </VStack>

            </AccordionPanel>
        </AccordionItem>
    )
}

export default YouTubeVideo