import React from 'react'

import { AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, HStack, VStack, Box, useColorModeValue} from '@chakra-ui/react'

import YouTubeThumbnail from './YouTubeThumbnail'
import YouTubeTitle from './YouTubeTitle'
import YouTubeDescription from './YouTubeDescription'
import YouTubeLocation from './YouTubeLocation'
import YouTubeRedirectLink from './YouTubeRedirectLink'

import colors from '@/themes/colors'

const YouTubeVideo = ({video}) => {
    const borderColor = useColorModeValue(colors.moto.content.border.light, colors.moto.content.border.dark);

    return (
        <AccordionItem >
            <AccordionButton >

                <HStack spacing="4" padding='10px'>
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

                <Box borderBottom="4px solid" borderColor={borderColor}/>

            </AccordionPanel>
        </AccordionItem>
    )
}

export default YouTubeVideo