import React from 'react'
import { FaFire } from 'react-icons/fa';
import { Icon, useStyleConfig } from '@chakra-ui/react'

const LatestIcon = (props) => {
    const styles = useStyleConfig('SubtitleIcon', { ...props })

    return (
        <Icon as={FaFire} boxSize={7} __css={styles} />
    )
}

export default LatestIcon