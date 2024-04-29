import React from 'react'
import { isMobile } from 'react-device-detect';

import { TabList, Center } from '@chakra-ui/react'

import NavigationBarDesktop from './desktop/NavigationBarDesktop'
import NavigationBarMobile from './mobile/NavigationBarMobile'

const NavigationBar = () => {
    return (
        <Center>
            <TabList>
                {isMobile ? (
                    <NavigationBarMobile />
                ) : (
                    <NavigationBarDesktop />
                )}            
            </TabList>
        </Center>
        
    )
}

export default NavigationBar