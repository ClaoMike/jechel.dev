import { accordionAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'
import colors from '@/themes/colors'

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