import React from 'react'
import { VStack } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/react'

const VersionDisplay = () => {
    const version = '1.0.0'

    return (
        <VStack mb="20px"> {/* Add mb="20px" for bottom margin */}
            <Text fontSize='sm'>Version: {version}</Text>
        </VStack>
    )
}

export default VersionDisplay
