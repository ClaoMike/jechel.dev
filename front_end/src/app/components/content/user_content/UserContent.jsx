import React from 'react'
import { Tabs } from '@chakra-ui/react'
import NavigationBar from './navigation_bar/NavigationBar'
import Pages from './content_pages/Pages'

const UserContent = () => {
  return (
    <Tabs variant='soft-rounded' colorScheme='green'>

      <NavigationBar />
      <Pages />

    </Tabs>
  )
}

export default UserContent