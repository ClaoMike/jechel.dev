import React from 'react';
import { Icon } from '@chakra-ui/react'
import { FaTerminal } from 'react-icons/fa';
import { useColorModeValue } from '@chakra-ui/react';

const SubtitleIcon = () => {
    const iconColor = useColorModeValue('blue.500', 'red.300');
    
    return (
        <Icon as={FaTerminal} boxSize={7} color={iconColor}/>
    )
}

export default SubtitleIcon