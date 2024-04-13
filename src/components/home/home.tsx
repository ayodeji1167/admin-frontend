import React from 'react';
import SizeWrapper from '../sizewrapper/SizeWrapper';
import Top from './Top';
import Bottom from './bottom';
import Box from '@/components/ui/chakra/Box';

export default async function Home() {
  // const session = await getServerAuthSession();
  // console.log('session from home  is ', session?.user);

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
