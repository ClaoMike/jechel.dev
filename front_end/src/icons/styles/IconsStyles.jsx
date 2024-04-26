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

        'react': {
            color: colors.version.icons.react,
        },

        'javascript': {
            color: colors.version.icons.javascript,
        },

        'html': {
            color: colors.version.icons.html,
        },

        'css': {
            color: colors.version.icons.css,
        },

        'ruby': {
            color: colors.version.icons.ruby,
        },

        'rails': {
            color: colors.version.icons.rails,
        },

    }
    
});

export default iconsTheme;