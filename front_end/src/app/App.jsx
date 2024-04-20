import './App.css'
import { useSelector } from 'react-redux'
import useThemeDetection from './useThemeDetection';

function App() {
  const theme = useSelector((state) => state.theme.value)

  useThemeDetection();

  return (
    <>
      <p>{theme}</p>
    </>
  )
}

export default App
