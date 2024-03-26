import React from 'react';
import GridItem from '@/components/ui/chakra/GridItem';
import Box from '@/components/ui/chakra/Box';
import Text from '@/components/ui/chakra/Text';
import SimpleGrid from '@/components/ui/chakra/SimpleGrid';
import Quicklink from './quicklink';
import { quicklink } from '@/data/quicklink';

export default function Bottom() {
  return (
    <Box mt={'2.5rem'}>
      <Text mb={'2.3rem'} textStyle={'subHeading'}>
        Quick Access Links
      </Text>
      <SimpleGrid gap={'1.4rem'} columns={3}>
        {quicklink.map((item, index) => (
          <GridItem key={index}>
            <Quicklink {...item} />
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
}
