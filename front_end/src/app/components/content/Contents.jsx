import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Center, VStack } from '@chakra-ui/react';

import Header from '@components/content/header/Header';
import UserContent from '@components/content//user_content/UserContent';
import LoginForm from '@components/content/login_page/LoginForm';
import VersionDisplay from '../VersionDisplay';

const Contents = () => {
  return (
    <Center style={{ position: 'relative', zIndex: 1, height: '100vh' }}>
      <VStack 
        justifyContent="flex-start"  // Push content to the top
        alignItems="stretch"        // Stretch items to fill container width
        spacing="auto"              // Automatically adjust spacing
        height="100%"               // Occupy full height
      >
        <VStack mt="5vh" mb="5vh">
          <Header/>
          <Router>
            <Routes>
              <Route path='/*' element={<UserContent />} />
              <Route path='/admin' element={<LoginForm />} />
            </Routes>
          </Router>
        </VStack>   

        {/* Spacer to push VersionDisplay to the bottom */}
        <div style={{ flex: '1 1 auto' }} />

        <VersionDisplay />
      </VStack>
    </Center>
  )
}

export default Contents;
