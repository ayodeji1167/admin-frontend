import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export default function SizeWrapper({ children }: { children: ReactNode }) {
  return (
    <Box maxW={{ base: '95%', lg: '90%', '2xl': '8xl' }} mx={'auto'}>
      {children}
    </Box>
  );
}
