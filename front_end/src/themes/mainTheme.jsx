import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import colors from '@themes/colors';
import "@fontsource/courier-prime";

import iconsTheme from '@icons/styles/IconsStyles';
import { inputTheme } from '@components/content/login_page/textfields/textfield_components/InputStyle'
import { tabsTheme } from '@/app/components/content/user_content/navigation_bar/components/tabs/TabsStyle';
import { color } from 'framer-motion';

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
    Icon: iconsTheme,
    Input: inputTheme,
    Tabs: tabsTheme,

    Button: {
      // baseStyle: {},
      // sizes: {},
      variants: {
        'with-shadow': (props) => ({
          bg: mode(colors.login_form.button.background.light, colors.login_form.button.background.dark)(props),
          boxShadow: '0 0 2px 2px ' + colors.login_form.button.border,
          borderRadius: '30px',
        }),
      },
      defaultProps: {
        // size: '',
        variant: 'with-shadow',
        // colorScheme: '',
      },
    },

    Spinner: {
      variants: {
        'classic': (props) => ({
          color: mode(colors.loading_spinner.light, colors.loading_spinner.dark)(props),
        }),
      },
      defaultProps: {
        size: 'lg',
        variant: 'classic',
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

