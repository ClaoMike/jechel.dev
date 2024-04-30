import React from 'react'
// import { isMobile } from 'react-device-detect';

import { TabList, Center } from '@chakra-ui/react'

import NavigationBarDesktop from './desktop/NavigationBarDesktop'
import NavigationBarMobile from './mobile/NavigationBarMobile'
import colors from '@/themes/colors';
import { useColorModeValue } from '@chakra-ui/react'
import { isMobile } from 'react-device-detect';

const NavigationBar = () => {
    const backgroundColor = useColorModeValue(colors.navigation_bar.background.light, colors.navigation_bar.background.dark);
    
    return (
        <div style={{ 
            position: 'sticky', 
            top: 0, 
            zIndex: 10, 
            background: (isMobile ? undefined : backgroundColor), 
            paddingTop: '10px', 
            paddingBottom: '10px'
        }}>
            <Center>
                <TabList>
                    {isMobile ? (
                        <NavigationBarMobile />
                    ) : (
                        <NavigationBarDesktop />
                    )}            
                </TabList>
            </Center>
        </div>
        
    )
}

export default NavigationBar