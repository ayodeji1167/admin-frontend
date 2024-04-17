import React from 'react';
import SizeWrapper from '../sizewrapper/SizeWrapper';
import Top from './Top';
import Bottom from './bottom';
import Box from '@/components/ui/chakra/Box';
// import { getServerAuthSession } from '@/hooks/auth';

export default async function Home() {
  // const session = await getServerAuthSession();
  // console.log('session from home  is ', session);

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
