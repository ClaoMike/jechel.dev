import { defineStyle, defineStyleConfig } from '@chakra-ui/react'
import colors from '@/themes/colors'

const classicVariant = defineStyle((props) => {
    return {

      _light: {
        bg: colors.latest.background.light,
      },
      _dark: {
        bg: colors.latest.background.dark,
      },
    }
  })

  const contrastVariant = defineStyle((props) => {
    return {

      _light: {
        bg: colors.latest.background.dark,
      },
      _dark: {
        bg: colors.latest.background.light,
      },
    }
  })
  
  // define custom variants
  const variants = {
    classic: classicVariant,
    contrast: contrastVariant,
  }

// export the component theme
export const containerTheme = defineStyleConfig({ variants })