import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Center
  } from '@chakra-ui/react'

  import NavigationBar from '../NavigationBar'
  import MenuButton from './MenuButton'

const MobileDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <MenuButton buttonReference={btnRef} onClick={onOpen} />
            
            <Drawer
                isOpen={isOpen}
                placement='bottom'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />

                <DrawerContent>
                    <DrawerCloseButton />

                    <DrawerHeader>Sections</DrawerHeader>
        
                    <DrawerBody>
                        <Center>
                            <NavigationBar />
                        </Center>
                        
                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
    )
}

export default MobileDrawer