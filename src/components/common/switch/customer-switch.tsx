import { Center, Text } from '@chakra-ui/react';
import React from 'react';

interface CustomerSwitchprops {
  setIsExistingCustomer: (data: boolean) => void;
  isExistingCustomer: boolean;
}
export default function CustomerSwicth({
  setIsExistingCustomer,
  isExistingCustomer,
}: CustomerSwitchprops) {
  return (
    <Center
      mx={'auto'}
      w={'22rem'}
      h={'4rem'}
      bg={'#E9EBF8'}
      gap={'.5rem'}
      rounded={'.5rem'}
    >
      <Center
        cursor={'pointer'}
        userSelect={'none'}
        rounded={'.5rem'}
        h={'2.3rem'}
        w={'10rem'}
        bg={isExistingCustomer ? '#81AEDC' : 'transparent'}
        onClick={() => setIsExistingCustomer(true)}
      >
        <Text
          color={isExistingCustomer ? '#E9EBF8' : ''}
          fontWeight={isExistingCustomer ? 600 : 500}
        >
          Existing Customer
        </Text>
      </Center>
      <Center
        cursor={'pointer'}
        userSelect={'none'}
        rounded={'.5rem'}
        h={'2.3rem'}
        w={'10rem'}
        bg={!isExistingCustomer ? '#81AEDC' : 'transparent'}
        onClick={() => setIsExistingCustomer(false)}
      >
        <Text
          color={!isExistingCustomer ? '#E9EBF8' : ''}
          fontWeight={!isExistingCustomer ? 600 : 500}
        >
          New Customer
        </Text>
      </Center>
    </Center>
  );
}
