import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import colors from './colors';

const darkTheme = extendTheme({
  components: {
    Heading: {
      baseStyle: (props) => ({
        bg: mode('red.500', 'red.500')(props),
        color: mode('white', 'white')(props),
      }),
    },
    // You can add more components here with their respective base styles
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode(colors.background.dark, colors.background.dark)(props),
      },
    }),
  },
});

export default darkTheme;
