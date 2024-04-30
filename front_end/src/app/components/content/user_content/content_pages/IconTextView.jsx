import React from 'react'
import { HStack, Text} from '@chakra-ui/react'

const IconTextView = ({icon, text}) => {
  return (
    <HStack spacing="4" align="top">
        {icon}
        <Text mt='3px' >{text}</Text>
    </HStack>
    
  )
}

export default IconTextView