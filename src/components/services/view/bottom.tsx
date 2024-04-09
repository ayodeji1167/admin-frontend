'use client';

import Box from '@/components/ui/chakra/Box';
import React from 'react';
import ServiceLogs from '@/components/common/service-logs/service-logs';

export default function Bottom() {
  return (
    <Box bg={'white'} mt={'2rem'} rounded={'1rem'} overflow={'hidden'}>
      <ServiceLogs />
    </Box>
  );
}
