import CustomBreadcrumb from '@/components/common/CustomBreadcrumb';
import { Flex, Box, Button, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export default function Head({ id }: { id: string }) {
  return (
    <Flex alignItems={'center'} justifyContent={'space-between'} pt={'2rem'}>
      <Box>
        <Text mb={'.5rem'} textStyle={'subHeading'}>
          Vehicle Information
        </Text>
        <CustomBreadcrumb />
      </Box>

      <Box>
        <Link href={`/service/add/${id}`}>
          <Button minW={'9rem'}>Log service</Button>
        </Link>
      </Box>
    </Flex>
  );
}
