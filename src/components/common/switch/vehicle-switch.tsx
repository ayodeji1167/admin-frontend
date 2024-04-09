import { Center, Text } from '@chakra-ui/react';
import React from 'react';

interface CustomerSwitchprops {
  setIsExistingVehicle: (data: boolean) => void;
  isExistingVehicle: boolean;
}
export default function VehicleSwitch({
  setIsExistingVehicle,
  isExistingVehicle,
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
        bg={isExistingVehicle ? '#81AEDC' : 'transparent'}
        onClick={() => setIsExistingVehicle(true)}
      >
        <Text
          color={isExistingVehicle ? '#E9EBF8' : ''}
          fontWeight={isExistingVehicle ? 600 : 500}
        >
          Existing Vehicle
        </Text>
      </Center>
      <Center
        cursor={'pointer'}
        userSelect={'none'}
        rounded={'.5rem'}
        h={'2.3rem'}
        w={'10rem'}
        bg={!isExistingVehicle ? '#81AEDC' : 'transparent'}
        onClick={() => setIsExistingVehicle(false)}
      >
        <Text
          color={!isExistingVehicle ? '#E9EBF8' : ''}
          fontWeight={!isExistingVehicle ? 600 : 500}
        >
          New Vehicle
        </Text>
      </Center>
    </Center>
  );
}
