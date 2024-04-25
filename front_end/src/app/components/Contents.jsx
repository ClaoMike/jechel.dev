import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Center, VStack } from '@chakra-ui/react';
import Header from './header/Header';
import UserContent from './UserContent';
import LoginPage from './login_page/LoginPage';

const Contents = () => {
  return (
    <Center style={{ position: 'relative', zIndex: 1 }}>
      <VStack mt="5vh" mb="5vh">
        
        <Header/>
        
        <Router>
          <Routes>
            <Route path='/*' element={<UserContent />} />
            <Route path='/admin' element={<LoginPage />} />
          </Routes>
        </Router>
        
      </VStack>    
    </Center>
  )
}

export default Contents