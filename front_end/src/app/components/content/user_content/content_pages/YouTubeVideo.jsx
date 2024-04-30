import React from 'react'

import { AccordionItem, AccordionButton, AccordionPanel, HStack, VStack, Box, useColorModeValue} from '@chakra-ui/react'

import YouTubeDescription from './YouTubeDescription'
import YouTubeLocation from './YouTubeLocation'
import YouTubeRedirectLink from './YouTubeRedirectLink'
import AccordionButtonContent from './AccordionButtonContent'

import colors from '@/themes/colors'
import { isMobile } from 'react-device-detect'

const YouTubeVideo = ({video}) => {
    const borderColor = useColorModeValue(colors.moto.content.border.light, colors.moto.content.border.dark);

    return (
        <AccordionItem >
            <AccordionButton >

                {isMobile ? (
                    <VStack spacing="4" padding='10px'>
                        <AccordionButtonContent thumbnail={video.thumbnail} description={video.description} title={video.title} />
                    </VStack>
                ) : (
                    <HStack spacing="4" padding='10px'>
                        <AccordionButtonContent thumbnail={video.thumbnail} description={video.description} title={video.title} />

                    </HStack>
                )}

                
            </AccordionButton>

            <AccordionPanel>

                <VStack marginBottom="10px" align='left'>
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