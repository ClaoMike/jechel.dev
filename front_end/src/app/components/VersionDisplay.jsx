import React from 'react'
import { VStack, HStack } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/react'
import ReactIcon from '@/icons/ReactIcon'
import JSIcon from '@/icons/JSIcon'
import HTMLIcon from '@/icons/HTMLIcon'
import CSSIcon from '@/icons/CSSIcon'
import RubyIcon from '@/icons/RubyIcon'
import RubyOnRailsIcon from '@/icons/RubyOnRailsIcon'

const VersionDisplay = () => {
    const version = '1.0.0'

    return (
        <VStack mb="20px">
            <Text fontSize='sm'>Version: {version}</Text>
            <HStack>

                <Tooltip label='React'>
                    <span>
                        <ReactIcon />
                    </span> 
                </Tooltip>

                <Tooltip label='JavaScript'>
                    <span>
                        <JSIcon />
                    </span> 
                </Tooltip>

                <Tooltip label='HTML'>
                    <span>
                        <HTMLIcon />
                    </span> 
                </Tooltip>

                <Tooltip label='CSS'>
                    <span>
                        <CSSIcon />
                    </span> 
                </Tooltip>

                <Tooltip label='Ruby'>
                    <span>
                        <RubyIcon />
                    </span> 
                </Tooltip>

                <Tooltip label='Ruby on Rails'>
                    <span>
                        <RubyOnRailsIcon />
                    </span> 
                </Tooltip>
                
            </HStack>
        </VStack>
    )
}

export default VersionDisplay
