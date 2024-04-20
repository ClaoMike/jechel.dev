import './App.css'
import { useSelector } from 'react-redux'
import useThemeDetection from './useThemeDetection';
import { Heading } from '@chakra-ui/react'

function App() {
  const theme = useSelector((state) => state.theme.value)

  useThemeDetection();

  return (
    <>
      <p>{theme}</p>
      <Heading>I'm a Heading</Heading>
    </>
  )
}

export default App
