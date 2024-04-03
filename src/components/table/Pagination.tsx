import React from 'react';
import Box from '@/components/ui/chakra/Box';
import Flex from '@/components/ui/chakra/Flex';
import Text from '@/components/ui/chakra/Text';

export default function Pagination() {
  return (
    <Flex px={'2rem'} py={'1rem'} bg={'white'}>
      <Text>15 to 29 out of 96</Text>

      <Box></Box>
    </Flex>
  );
}
