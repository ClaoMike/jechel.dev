import React from 'react';
import { Heading, Center, VStack, HStack } from '@chakra-ui/react';

import ThemeSwitch from './components/ThemeSwitch';

import { Icon } from '@chakra-ui/react'
import { FaTerminal } from 'react-icons/fa';

function App() {
  return (
    <Center>
      <VStack>

        <Heading>Claudiu Mihai Jechel</Heading>
        <HStack>
          <Icon as={FaTerminal}  boxSize={10}/>
          <Heading>Software Engineer</Heading>
          <ThemeSwitch />
        </HStack>
        

      </VStack>    
    </Center>
  );
}

export default App;
