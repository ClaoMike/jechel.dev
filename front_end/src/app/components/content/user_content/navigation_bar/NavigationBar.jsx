import React from 'react'
import { TabList } from '@chakra-ui/react'
import CustomTab from '@components/content/user_content/navigation_bar/CustomTab'
import paths from '@paths/paths'

const NavigationBar = () => {
    return (
        <TabList>

            <CustomTab path={paths.home.path} label='Latest' />
            <CustomTab path={paths.moto.path} label='Moto' />
            <CustomTab path={paths.about_me.path} label='About Me' />

        </TabList>
    )
}

export default NavigationBar