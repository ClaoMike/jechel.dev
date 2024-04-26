import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

import App from '@/app/App'
import { store } from '@/states_management/store'
import { useThemeDetection } from '@themes/useThemeDetection'
import mainTheme from '@themes/mainTheme'

const Root = () => {
  useThemeDetection();

  return (
    <ChakraProvider theme={mainTheme}>
      <ColorModeScript initialColorMode={mainTheme.config.initialColorMode} />
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

