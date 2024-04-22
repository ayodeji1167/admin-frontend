'use client';
import React from 'react';
import Box from '@/components/ui/chakra/Box';
import Flex from '@/components/ui/chakra/Flex';
import Text from '@/components/ui/chakra/Text';
import CustomBreadcrumb from '@/components/common/CustomBreadcrumb';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
export default function Top() {
  return (
    <Flex alignItems={'center'} justifyContent={'space-between'} pt={'2rem'}>
      <Box>
        <Text mb={'.5rem'} textStyle={'subHeading'}>
          Add New Vehicle
        </Text>
        <CustomBreadcrumb />
      </Box>

      <Box>
        <CircularProgress trackColor="white" value={50} size="5rem">
          <CircularProgressLabel>50</CircularProgressLabel>
        </CircularProgress>
      </Box>
    </Flex>
  );
}
