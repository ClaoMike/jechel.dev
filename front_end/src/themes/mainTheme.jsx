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

    Heading: {
      baseStyle: (props) => ({}),
    },
  },
});

darkTheme.fonts = {
  body: `Courier Prime`,
};

export default darkTheme;
