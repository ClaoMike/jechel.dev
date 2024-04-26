import React from 'react'
import { Icon } from '@chakra-ui/react'

const CustomFaIcon = ({ configuration }) => {
    return (
        <Icon variant={configuration.variant} as={configuration.icon} boxSize={configuration.boxSize}  mb={configuration.marginBottom} />
    )
}

export default CustomFaIcon