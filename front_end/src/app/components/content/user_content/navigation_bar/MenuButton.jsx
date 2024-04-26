import React from 'react'
import { Button, Icon } from '@chakra-ui/react'
import { FaBars } from 'react-icons/fa';

const MenuButton = ({buttonReference, onClick }) => { // open
  return (
    <Button ref={buttonReference} colorScheme='teal' onClick={onClick} position="fixed" bottom="20px" right="20px" zIndex="1">
        <Icon as={FaBars} boxSize={7}  />
    </Button>
  )
}

export default MenuButton