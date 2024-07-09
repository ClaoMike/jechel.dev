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
  
  // define custom variants
  const variants = {
    classic: classicVariant,
  }

// export the component theme
export const containerTheme = defineStyleConfig({ variants })