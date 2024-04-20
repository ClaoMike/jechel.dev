import React from 'react';
import './App.css';
import { Heading } from '@chakra-ui/react';
import ThemeSwitch from './components/ThemeSwitch';

function App() {
  return (
    <>
      <Heading>Claudiu Mihai Jechel</Heading>
      <ThemeSwitch />
    </>
  );
}

export default App;
