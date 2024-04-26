import { tabsAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import colors from '@/themes/colors';
import { isMobile } from 'react-device-detect';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(tabsAnatomy.keys);

const baseStyle = definePartsStyle({
    tab: {
        borderRadius: 'full',
    },
})
  
const pill = definePartsStyle({
    tab: {
        border: '2px solid',
        bg: 'transparent',
        borderColor: colors.tabs.tab.borderColor.light,
        mb: '2px',
        mt: '2px',
        ml: '2px',
        mr: '2px',
        minW: isMobile ? '80vw': '130px',

        _dark: {
            borderColor: colors.tabs.tab.borderColor.dark,
        },

        _selected: {
            bg: colors.tabs.tab.selected.background.light,

            _dark: {
                bg: colors.tabs.tab.selected.background.dark,
            },
                        
        },
    },
})

export const tabsTheme = defineMultiStyleConfig({ 
    baseStyle,
    variants: { pill },
    defaultProps: {
        variant: 'pill',
    },
  })