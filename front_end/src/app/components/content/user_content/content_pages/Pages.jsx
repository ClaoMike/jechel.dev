import React from 'react'
import { TabPanels, Center } from '@chakra-ui/react'
import Page from '@components/content/user_content/content_pages/Page'
import LoadingSpinner from '@/app/components/LoadingSpinner'

const Pages = () => {
    return (
        <>
            <TabPanels>
                
                <Page content={ <p>Latest content</p> } />
                <Page content={ <p>Moto Content</p> } />
                <Page content={ <p>About Me content</p> } />

            </TabPanels>
            
            {/* <LoadingSpinner /> */}

            

        </>
        
    )
}

export default Pages