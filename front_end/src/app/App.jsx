import React from 'react';
import { Heading, Center, VStack } from '@chakra-ui/react';

import ThemeSwitch from './components/ThemeSwitch';

function App() {
  return (
    <Center>
      <VStack>

        <Heading>Claudiu Mihai Jechel</Heading>
        <ThemeSwitch />

      </VStack>    
    </Center>
  );
}

export default App;
