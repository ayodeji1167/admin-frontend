import React from 'react';
import Box from '@/components/ui/chakra/Box';
import Flex from '@/components/ui/chakra/Flex';
import Text from '@/components/ui/chakra/Text';

export default function Pagination({ pagination, total }: any) {
  // console.log('pagination i table is ', pagination);
  const from = Math.floor(pagination.pageIndex * pagination.pageSize);
  const to = Math.floor(from + pagination.pageSize);
  return (
    <Flex py={'1rem'} bg={'white'}>
      <Text>
        {from || 1} to {to > total ? total : to} out of {total}
      </Text>

      <Box></Box>
    </Flex>
  );
}
