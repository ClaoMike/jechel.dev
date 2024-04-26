import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button, 
    Box,
    Icon
  } from '@chakra-ui/react'

  import { FaBars } from 'react-icons/fa';

  import NavigationBar from './NavigationBar'

const MobileDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Box position="fixed" bottom="20px" right="20px" zIndex="1">
                <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                    <Icon as={FaBars} boxSize={7}  />
                </Button>
            </Box>
            
            <Drawer
                isOpen={isOpen}
                placement='bottom'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />

                <DrawerContent>
                    <DrawerCloseButton />

                    <DrawerHeader>
                        Sections
                    </DrawerHeader>
        
                    <DrawerBody>
                        <NavigationBar />
                    </DrawerBody>
        
                    {/* <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                        Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter> */}

                </DrawerContent>
            </Drawer>
        </>
    )
}

export default MobileDrawer