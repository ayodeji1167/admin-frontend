import { Center, CenterProps } from '@chakra-ui/react';
import React from 'react';

export default function Status({
  status,
  ...styles
}: { status: string } & CenterProps) {
  return (
    <Center textTransform={'capitalize'} {...styles}>
      {status.toLowerCase()}
    </Center>
  );
}
