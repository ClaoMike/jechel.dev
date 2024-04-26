import React from 'react'
import { FaMotorcycle } from 'react-icons/fa';
import { Icon, useStyleConfig } from '@chakra-ui/react'

const MotoIcon = (props) => {
    const styles = useStyleConfig('SubtitleIcon', { ...props })
    
    return (
        <Icon as={FaMotorcycle} boxSize={7} __css={styles} />
    )
}

export default MotoIcon