import React from 'react'
import { HStack, Text} from '@chakra-ui/react'

const IconTextView = ({icon, text}) => {
  return (
    <HStack>
        {icon}
        <Text >{text}</Text>
    </HStack>
    
  )
}

export default IconTextView