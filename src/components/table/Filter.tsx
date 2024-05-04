'use client';
import React from 'react';
import Flex from '@/components/ui/chakra/Flex';
import Text from '@/components/ui/chakra/Text';
import { Input, InputProps } from '@chakra-ui/react';
interface FilterProps {
  inputProps?: InputProps;
  name: string;
}
export default function Filter({ name, inputProps }: FilterProps) {
  return (
    <Flex
      py={'1.5rem'}
      px={'2rem'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Text fontFamily={'heading'} fontWeight={600} fontSize={'1.2rem'}>
        {name}
      </Text>
      <Flex>
        <Input placeholder="Search" w={'20rem'} {...inputProps} />
      </Flex>
    </Flex>
  );
}
