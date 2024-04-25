import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import colors from '../../../themes/colors'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const baseStyle = definePartsStyle({
  field: {
    borderRadius: 'full',
  },
})

const pill = definePartsStyle({
  field: {
    background: colors.background.light,

    border: '2px solid',
    borderColor: colors.link.light,

    _dark: {
      background: colors.background.dark,
      borderColor: colors.link.dark,
      
    },
  },
})

export const inputTheme = defineMultiStyleConfig({ 
  baseStyle,
  variants: { pill },
  defaultProps: {
    variant: 'pill',
  },
})