import React from 'react';
import { Heading, Center, VStack, HStack } from '@chakra-ui/react';

import ThemeSwitch from './components/ThemeSwitch';
import SubtitleIcon from './components/subtitle_icon/SubtitleIcon';
import Title from './components/Title';
import Subtitle from './components/Subtitle';

function App() {
  return (
    <Center>
      <VStack mt="5vh" mb="5vh">

        <Title />
        <HStack>
          <SubtitleIcon />
          <Subtitle />
          <ThemeSwitch />
        </HStack>
        

      </VStack>    
    </Center>
  );
}

export default App;
