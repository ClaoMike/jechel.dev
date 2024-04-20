import { extendTheme } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import { mode } from '@chakra-ui/theme-tools'

const darkTheme = extendTheme({
    components: {
      Heading: {
        baseStyle: (props) => ({
          bg: mode('red.500', 'blue.500')(props),
          color: mode('white', 'black')(props),
        }),
      },
    },
  });

export default darkTheme;