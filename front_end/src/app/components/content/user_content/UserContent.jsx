import React, { useState, useEffect } from 'react'
import { Tabs } from '@chakra-ui/react'
import NavigationBar from './navigation_bar/NavigationBar'
import Pages from './content_pages/Pages'
import { useLocation } from 'react-router-dom';
import paths from '@paths/paths'

const UserContent = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
        case paths.home:
            setTabIndex(0)
            break;
        case paths.moto:
            setTabIndex(1)
            break;
        case paths.about_me:
            setTabIndex(2)
            break;
        default:
            setTabIndex(0)
            break;
      }
  }, [location.pathname]);

  return (
    <Tabs variant='soft-rounded' colorScheme='green' index={tabIndex}>

      <NavigationBar />
      <Pages />

    </Tabs>
  )
}

export default UserContent