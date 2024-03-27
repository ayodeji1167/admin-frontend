import React from 'react';
import SizeWrapper from '../sizewrapper/SizeWrapper';
import Top from './Top';
import Bottom from './bottom';
import Box from '@/components/ui/chakra/Box';

export default function Home() {
  return (
    <div>
      <SizeWrapper>
        <Box pb="5rem">
          <Top />
          <Bottom />
        </Box>
      </SizeWrapper>
    </div>
  );
}
