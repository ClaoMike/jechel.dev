import React from 'react'
import { TabPanels } from '@chakra-ui/react'
import Page from './Page'

const Pages = () => {
    return (
        <TabPanels>

            <Page content={ <p>Latest content</p> } />
            <Page content={ <p>Moto Content</p> } />
            <Page content={ <p>About Me content</p> } />

        </TabPanels>
    )
}

export default Pages