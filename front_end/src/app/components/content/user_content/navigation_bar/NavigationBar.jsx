import React from 'react'
import { TabList } from '@chakra-ui/react'
import CustomTab from './CustomTab'

const NavigationBar = () => {
    return (
        <TabList>

            <CustomTab path='' label='Latest' />
            <CustomTab path='/moto' label='Moto' />
            <CustomTab path='/about-me' label='About Me' />

        </TabList>
    )
}

export default NavigationBar