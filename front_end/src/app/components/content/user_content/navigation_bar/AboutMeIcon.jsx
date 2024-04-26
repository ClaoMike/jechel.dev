import React from 'react'
import { FaUserNinja  } from 'react-icons/fa';
import { Icon, useStyleConfig } from '@chakra-ui/react'

const AboutMeIcon = (props) => {
    const styles = useStyleConfig('SubtitleIcon', { ...props })
    
    return (
        <Icon as={FaUserNinja} boxSize={7} __css={styles} />
    )
}

export default AboutMeIcon