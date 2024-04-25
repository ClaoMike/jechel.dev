import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import colors from './colors';
import "@fontsource/courier-prime";

import SubtitleIcon from '../app/components/header/subheader/subtitle_icon/SubtitleIconStyle';

const darkTheme = extendTheme({
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },

  styles: {
    global: (props) => ({
      html: {},
      body: {
        bg: mode(colors.background.light, colors.background.dark)(props),
        color: mode(colors.text.light, colors.text.dark)(props),
      },
    }),
  },

  components: {
    SubtitleIcon,

    Button: {
      // baseStyle: {},
      // sizes: {},
      variants: {
        'with-shadow': (props) => ({
          bg: mode(colors.link.light, colors.link.dark)(props),
          boxShadow: '0 0 2px 2px #efdfde',
        }),
      },
      defaultProps: {
        // size: '',
        variant: 'with-shadow',
        // colorScheme: '',
      },
    },
    
    Heading: {
      baseStyle: (props) => ({}),
    },
  },
});

darkTheme.fonts = {
  body: `Courier Prime`,
};

export default darkTheme;
