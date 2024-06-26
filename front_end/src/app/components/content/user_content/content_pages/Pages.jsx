import React from 'react'
import { TabPanels } from '@chakra-ui/react'
import Page from '@components/content/user_content/content_pages/Page'
import MotoPage from './moto/MotoPage'

const Pages = () => {
    return (
        <>
            <TabPanels>
                
                <Page content={ <p>Latest content</p> } />
                <Page content={ <MotoPage /> } />
                <Page content={ <p>About Me content</p> } />

            </TabPanels>
        </>
        
    )
}

export default Pages