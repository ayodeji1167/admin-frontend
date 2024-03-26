import { ComponentDefaultProps } from '@chakra-ui/react';
export const Button: ComponentDefaultProps = {
  defaultProps: {
    size: 'md',
    colorScheme: 'primary',
  },
  baseStyle: {
    variant: 'solid',
    borderRadius: '20px',
    fontFamily: 'body',
    minHeight: { base: '100px', md: '200px' },
    fontSize: { base: '14px', md: '16px' },
    fontWeight: '600',
  },

  variants: {
    primary: {
      color: 'white',
      bgColor: 'primary.500',
      width: { base: '10rem', md: '823px' },
      _focus: {
        boxShadow:
          '28px 40px 20px rgba(24, 19, 162, 0.03), 16px 23px 17px rgba(24, 19, 162, 0.1), 7px 10px 12px rgba(24, 19, 162, 0.17), 2px 3px 7px rgba(24, 19, 162, 0.2), 0px 0px 0px rgba(24, 19, 162, 0.2)',
        bgColor: 'brand.primary.500',
        borderRadius: '10px',
      },
      _hover: {
        border: '8px solid',
        borderColor: 'primary.100',
        boxShadow: ' 0px 0px 27px rgba(24, 19, 162, 0.2)',
        bgColor: 'brand.primary.500',
        borderRadius: '10px',
      },
    },
    outline: {
      color: 'primary.500',
      bgColor: 'white',
      border: '2px solid',
      borderColor: 'primary.500',
      minWidth: { md: '130px' },
      _focus: {
        bgColor: 'white',
        borderRadius: '10px',
      },
      _hover: {
        borderColor: 'primary.500',
        bgColor: 'white',
      },
    },
    ghost: {
      _focus: {
        bgColor: 'transparent',
      },
      _hover: {
        bgColor: 'transparent',
      },
    },

    solid: {
      color: 'white',
      bgColor: 'primary.500',
      p: '0',
      width: { md: '85px' },
      _focus: {
        bgColor: 'brand.primary.500',
      },
      _hover: {
        color: 'white',
        bgColor: 'primary.600',
      },
    },
  },
  sizes: {
    base: {
      minHeight: '40px',
      borderRadius: '4px',
      fontSize: 'sm',
    },
    md: {
      minHeight: '36px',
      fontSize: 'md',
    },
    lg: {
      minHeight: '42px',
      fontSize: 'lg',
    },
  },
};
