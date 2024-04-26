import React from 'react'
import { Icon, useStyleConfig } from '@chakra-ui/react'

const CustomFaIcon = ({ configuration, props }) => {
    const styles = useStyleConfig(configuration.name, { ...props })
    
    return (
        <Icon as={configuration.icon} boxSize={configuration.boxSize} __css={styles} mb={configuration.marginBottom} />
    )
}

export default CustomFaIcon