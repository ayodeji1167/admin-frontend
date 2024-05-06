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
      px={{ base: '1rem', md: '2rem' }}
      alignItems={'center'}
      justifyContent={'space-between'}
      flexWrap={'wrap'}
      gap={{ base: '1rem', md: '0' }}
    >
      <Text
        fontFamily={'heading'}
        fontWeight={600}
        fontSize={{ base: '0.8rem', md: '1.2rem' }}
      >
        {name}
      </Text>
      <Flex>
        <Input
          placeholder="Search"
          w={{ base: '80vw', md: '20rem' }}
          {...inputProps}
        />
      </Flex>
    </Flex>
  );
}
