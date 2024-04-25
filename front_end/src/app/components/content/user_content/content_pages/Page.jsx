import React from 'react'
import { TabPanel } from '@chakra-ui/react'

const Page = ({ content }) => {
    return (
        <TabPanel>
            {content}
        </TabPanel>
    )
}

export default Page