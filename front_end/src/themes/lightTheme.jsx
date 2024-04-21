import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import colors from './colors';

const lightTheme = extendTheme({
    components: {
      Heading: {
        baseStyle: (props) => ({
          bg: mode('green.500', 'green.500')(props),
          color: mode('black', 'black')(props),
        }),
      },
    },
    styles: {
      global: (props) => ({
        body: {
          bg: mode(colors.background.light,colors.background.light)(props),
        },
      }),
    },
  });

export default lightTheme;