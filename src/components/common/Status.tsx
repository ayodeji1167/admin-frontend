import { StatusEnum } from '@/enum/status';
import { getColor } from '@/utils/get-status-color';
import { CenterProps, Center, Text } from '@chakra-ui/react';
import React from 'react';

export default function Status({
  status,
  ...styles
}: { status: StatusEnum } & CenterProps) {
  return (
    <Center
      rounded={{ base: '.4rem', md: '.6rem' }}
      h={{ base: '2rem', md: '2.3rem' }}
      bg={getColor(status).bgColor}
      textTransform={'capitalize'}
      {...styles}
      fontSize={{ base: '.8rem', md: '1.1rem' }}
    >
      <Text fontWeight={600} color={getColor(status).textColor}>
        {status.toLowerCase()}
      </Text>
    </Center>
  );
}
