import React from 'react'
import { isMobile } from 'react-device-detect';

import { TabList } from '@chakra-ui/react'

import NavigationBarDesktop from './NavigationBarDesktop'
import NavigationBarMobile from './NavigationBarMobile'

const NavigationBar = () => {
    return (
        <TabList>
            {isMobile ? (
                <NavigationBarMobile />
            ) : (
                <NavigationBarDesktop />
            )}            
        </TabList>
    )
}

export default NavigationBar