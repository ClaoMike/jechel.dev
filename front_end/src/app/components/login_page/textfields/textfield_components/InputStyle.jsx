import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import colors from '../../../../../themes/colors'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const baseStyle = definePartsStyle({
  field: {
    borderRadius: 'full',
  },
})

const pill = definePartsStyle({
  field: {
    background: colors.login_form.textfield_input.background.light,

    border: '2px solid',
    borderColor: colors.login_form.textfield_input.border.normal,

    _dark: {
      background: colors.login_form.textfield_input.background.dark,
      borderColor: colors.login_form.textfield_input.border.normal,
      
    },

    _focusVisible: {
        borderColor: colors.login_form.textfield_input.border.focused.light,
        _dark: {
            borderColor: colors.login_form.textfield_input.border.focused.dark,
        }
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