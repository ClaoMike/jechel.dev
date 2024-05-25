import React from 'react'

import { AccordionItem, AccordionButton, AccordionPanel, HStack, VStack, Box, useColorModeValue} from '@chakra-ui/react'

import YouTubeDescription from './YouTubeDescription'
import YouTubeLocation from './YouTubeLocation'
import YouTubeRedirectLink from './YouTubeRedirectLink'
import AccordionButtonContent from './AccordionButtonContent'

import colors from '@/themes/colors'
import { isMobile } from 'react-device-detect'

import { AccordionIcon } from '@chakra-ui/react'

import YouTubeThumbnail from './YouTubeThumbnail'
import YouTubeTitle from './YouTubeTitle'

import { Flex, Spacer } from '@chakra-ui/react'

import { Wrap, WrapItem , Center} from '@chakra-ui/react'

const YouTubeVideo = ({video}) => {
    const borderColor = useColorModeValue(colors.moto.content.border.light, colors.moto.content.border.dark);

    return (
        <AccordionItem width={isMobile ? '80vw' : '50vw'} maxW='1000px'>
            <AccordionButton >
                <Wrap justify='space-between' align='center'>

                    <WrapItem>
                        <Center>
                            <YouTubeThumbnail thumbnail={video.thumbnail} description={video.description} />
                        </Center>
                    </WrapItem>
                    
                    <WrapItem>
                        <Center ml={isMobile ? undefined : '20px'}>
                            <YouTubeTitle title={video.title} />
                            <AccordionIcon ml='20px' />
                        </Center>
                    </WrapItem>
                
                </Wrap>
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