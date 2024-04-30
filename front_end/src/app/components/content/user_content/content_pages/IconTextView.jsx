import React from 'react';
import { HStack, Text, useColorMode } from '@chakra-ui/react';
import colors from '@/themes/colors';

const IconTextView = ({ icon, text, link }) => {
  const { colorMode } = useColorMode();

  // Determine text color based on color mode
  const textColor = link ? (colorMode === 'light' ? colors.moto.redirect_link.light : colors.moto.redirect_link.dark) : undefined;

  return (
    <HStack spacing="4" align="top">
      {icon}
      <Text mt="3px" color={textColor}>
        {text}
      </Text>
    </HStack>
  );
};

export default IconTextView;
