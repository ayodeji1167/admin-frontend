import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  label: {
    fontFamily: 'body',
    fontSize: '14px',
    color: '#424955',
  },
  control: {
    padding: { base: '.1px', md: 3 },
    borderRadius: { base: '4px', md: '7px' },
    borderWidth: '1px',
    boxShadow: 'none',
    outline: 'none',
    _focus: {
      boxShadow: 'none',
    },
  },
});

const sizes = {
  sm: definePartsStyle({
    control: defineStyle({
      p: 1.5,
    }),
  }),
  md: definePartsStyle({
    control: defineStyle({
      p: 2.5,
    }),
  }),
};

export const checkboxTheme = defineMultiStyleConfig({ baseStyle, sizes });
