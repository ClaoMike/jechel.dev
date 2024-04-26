import React from 'react'
import { isMobile } from 'react-device-detect';

import { TabList } from '@chakra-ui/react'

import NavigationBarDesktop from './desktop/NavigationBarDesktop'
import NavigationBarMobile from './mobile/NavigationBarMobile'

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