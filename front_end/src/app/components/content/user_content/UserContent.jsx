import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { home, moto, aboutMe } from '@slices/pageSlice';
import paths from '@paths/paths';
import { Tabs, Box } from '@chakra-ui/react';
import NavigationBar from '@components/content/user_content/navigation_bar/NavigationBar';
import Pages from '@components/content/user_content/content_pages/Pages';
import { isMobile } from 'react-device-detect';


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
  Input
} from '@chakra-ui/react'



const UserContent = () => {
  const location = useLocation();
  const tabIndex = useSelector((state) => state.page.tabIndex);
  const dispatch = useDispatch();

  useEffect(() => {
    switch (location.pathname) {
      case paths.home.path:
        dispatch(home());
        break;
      case paths.moto.path:
        dispatch(moto());
        break;
      case paths.about_me.path:
        dispatch(aboutMe());
        break;
      default:
        dispatch(home());
        break;
    }
  }, [location.pathname]);


  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <Tabs variant="soft-rounded" colorScheme="green" index={tabIndex}>
      {isMobile ? (
        <>

        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Menu
        </Button>
        
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Sections</DrawerHeader>
  
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

      ) : (
        <NavigationBar />
      )}
      <Pages />
    </Tabs>
  );
};

export default UserContent;
