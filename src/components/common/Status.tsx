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
      minW={'6.7rem'}
      rounded={'.6rem'}
      h={'2.3rem'}
      bg={getColor(status).bgColor}
      textTransform={'capitalize'}
      {...styles}
    >
      <Text fontWeight={600} color={getColor(status).textColor}>
        {' '}
        {status.toLowerCase()}
      </Text>
    </Center>
  );
}
