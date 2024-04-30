import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import colors from '@themes/colors';
import "@fontsource/courier-prime";

import iconsTheme from '@icons/styles/IconsStyles';
import { inputTheme } from '@components/content/login_page/textfields/textfield_components/InputStyle'
import { tabsTheme } from '@/app/components/content/user_content/navigation_bar/components/tabs/TabsStyle';

import { accordionAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys)

const custom = definePartsStyle({

  button: {
    borderRadius: "xl",
    border: "2px solid",

    background: colors.moto.button.background.light,
    borderColor: colors.moto.button.border.light,

    _dark: {
      borderColor: colors.moto.button.border.dark,
      background: colors.moto.button.background.dark,
    },

  },
  icon: {
    border: '1px solid',
    borderRadius: 'full',

    borderColor: colors.moto.icons.expand.background.light,
    background: colors.moto.icons.expand.background.light,
    color: colors.moto.icons.expand.color.light,

    _dark: {
      borderColor: colors.moto.icons.expand.background.dark,
      background: colors.moto.icons.expand.background.dark,
      color: colors.moto.icons.expand.color.dark,
    },
  },

  container: {
    marginBottom: "15px",
    marginTop: "15px"
  }

})

export const accordionTheme = defineMultiStyleConfig({
  variants: { custom },
})

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
    Accordion: accordionTheme,

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

