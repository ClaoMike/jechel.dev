import { extendTheme } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import { mode } from '@chakra-ui/theme-tools'

const lightTheme = extendTheme({
    components: {
      Heading: {
        baseStyle: (props) => ({
          bg: mode('green.500', 'blue.500')(props),
          color: mode('black', 'white')(props),
        }),
      },
    },
  });

export default lightTheme;