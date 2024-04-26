import React from 'react'
import { Button, Icon } from '@chakra-ui/react'
import MenuIcon from '@/icons/MenuIcon'

const MenuButton = ({buttonReference, onClick }) => {
  return (
    <Button ref={buttonReference} onClick={onClick} position="fixed" bottom="20px" right="20px" >
        {/* <Icon as={FaBars} boxSize={7}  /> */}
        <MenuIcon />
    </Button>
  )
}

export default MenuButton