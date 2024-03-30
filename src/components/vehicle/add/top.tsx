import React from 'react';
import Box from '@/components/ui/chakra/Box';
import Flex from '@/components/ui/chakra/Flex';
import Text from '@/components/ui/chakra/Text';
import CustomBreadcrumb from '@/components/common/CustomBreadcrumb';
export default function Top() {
  return (
    <Flex pt={'2rem'}>
      <Box>
        <Text textStyle={'subHeading'}>Add New Vehicle</Text>
        <CustomBreadcrumb />
      </Box>
    </Flex>
  );
}
