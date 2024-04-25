import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import colors from './colors';
import "@fontsource/courier-prime";

import SubtitleIcon from '../app/components/header/subheader/subtitle_icon/SubtitleIconStyle';

import { inputTheme } from '../app/components/login_page/textfields/textfield_components/InputStyle';


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
    Input: inputTheme,

    Button: {
      // baseStyle: {},
      // sizes: {},
      variants: {
        'with-shadow': (props) => ({
          bg: mode(colors.login_form.button.background.light, colors.login_form.button.background.dark)(props),
          boxShadow: '0 0 2px 2px ' + colors.login_form.button.border,
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
