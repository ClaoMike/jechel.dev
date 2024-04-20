import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { store } from './states_management/store.jsx'
import { Provider } from 'react-redux'
import darkTheme from './app/themes/darkTheme.jsx'
import lightTheme from './app/themes/LightTheme.jsx'
import useThemeDetection from './app/useThemeDetection.jsx'
import { useSelector } from 'react-redux'

const Root = () => {
  const theme = useSelector((state) => state.theme.value);

  useThemeDetection();

  return (
    <ChakraProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <App />
    </ChakraProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>
);

