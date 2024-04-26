import React from 'react'
import { Button } from '@chakra-ui/react'
import MenuIcon from '@/icons/MenuIcon'

const MenuButton = ({buttonReference, onClick }) => {
  return (
    <Button ref={buttonReference} onClick={onClick} position="fixed" bottom="20px" right="20px" >
        <MenuIcon />
    </Button>
  )
}

export default MenuButton