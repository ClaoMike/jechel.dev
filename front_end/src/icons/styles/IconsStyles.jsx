import { defineStyleConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import colors from '@themes/colors';

const iconsTheme = defineStyleConfig({
    baseStyle: (props) => ({
        color: mode(colors.link.light, colors.link.dark)(props),
    }),

    variants: {
        'latest': {
            color: colors.navigation_bar.icons.latest,
        },

        'moto': {
            color: colors.navigation_bar.icons.moto,
        },

        'aboutMe': {
            color: colors.navigation_bar.icons.aboutMe,
        },

        'menu': (props) => ({
            color: mode(colors.navigation_bar.icons.menu.light, colors.navigation_bar.icons.menu.dark)(props),
        }),
    }
    
});

export default iconsTheme;