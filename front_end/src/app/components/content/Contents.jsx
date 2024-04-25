import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Center, VStack } from '@chakra-ui/react';

import Header from '@components/content/header/Header';
import UserContent from '@components/content//user_content/UserContent';
import LoginForm from '@components/content/login_page/LoginForm';

const Contents = () => {
  return (
    <Center style={{ position: 'relative', zIndex: 1 }}>
      <VStack mt="5vh" mb="5vh">
        
        <Header/>
        
        <Router>
          <Routes>
            <Route path='/*' element={<UserContent />} />
            <Route path='/admin' element={<LoginForm />} />
          </Routes>
        </Router>
        
      </VStack>    
    </Center>
  )
}

export default Contents