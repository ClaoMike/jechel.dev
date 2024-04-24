import React from 'react';
import { Icon, useStyleConfig } from '@chakra-ui/react'
import { FaTerminal } from 'react-icons/fa';

const SubtitleIcon = (props) => {
    const styles = useStyleConfig('SubtitleIcon', { ...props })
    
    return (
        <Icon as={FaTerminal} boxSize={7} __css={styles} />
    )
}

export default SubtitleIcon;
