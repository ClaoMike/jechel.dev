import { defineStyleConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import colors from '../../../../../../themes/colors';

const SubtitleIcon = defineStyleConfig({
    baseStyle: (props) => ({
        color: mode(colors.link.light, colors.link.dark)(props),
    }),
});

export default SubtitleIcon;