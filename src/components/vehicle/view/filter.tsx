'use client';
import React from 'react';
import Flex from '@/components/ui/chakra/Flex';
import Text from '@/components/ui/chakra/Text';
import { Input } from '@chakra-ui/react';
export default function Filter() {
  return (
    <Flex
      py={'1.5rem'}
      px={'2rem'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Text fontFamily={'heading'} fontWeight={600} fontSize={'1.2rem'}>
        Vehicle List
      </Text>
      <Flex>
        <Input placeholder="Search" w={'20rem'} />
      </Flex>
    </Flex>
  );
}
