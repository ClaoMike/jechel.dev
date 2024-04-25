import React from 'react'
import { Tab } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

const CustomTab = ({path, label}) => {
    return (
        <Tab>
            <ChakraLink as={ReactRouterLink} to={path}>
                {label}
            </ChakraLink>
        </Tab>
    )
}

export default CustomTab