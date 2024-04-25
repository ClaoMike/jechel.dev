import React from 'react';
import { Center, VStack } from '@chakra-ui/react';
import Header from './header/Header';

const Contents = () => {
  return (
    <Center style={{ position: 'relative', zIndex: 1 }}>
      <VStack mt="5vh" mb="5vh">
        
        <Header/>
        
      </VStack>    
    </Center>
  )
}

export default Contents