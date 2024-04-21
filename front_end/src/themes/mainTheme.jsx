import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import colors from './colors';

const darkTheme = extendTheme({
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
  components: {
    Heading: {
      baseStyle: (props) => ({
        bg: mode('green.500', 'red.500')(props),
        color: mode('black', 'white')(props),
      }),
    },
    // You can add more components here with their respective base styles
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode(colors.background.light, colors.background.dark)(props),
      },
    }),
  },
});

export default darkTheme;
