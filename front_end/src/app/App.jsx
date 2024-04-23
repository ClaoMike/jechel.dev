import React from 'react';
import { Heading, Center, VStack, HStack } from '@chakra-ui/react';

import ThemeSwitch from './components/ThemeSwitch';
import SubtitleIcon from './components/subtitle_icon/SubtitleIcon';
import Title from './components/Title';

function App() {
  return (
    <Center>
      <VStack mt="5vh" mb="5vh">

        <Title />
        <HStack>
          <SubtitleIcon />
          <Heading as='h2' size='xl' >Software Engineer</Heading>
          <ThemeSwitch />
        </HStack>
        

      </VStack>    
    </Center>
  );
}

export default App;
