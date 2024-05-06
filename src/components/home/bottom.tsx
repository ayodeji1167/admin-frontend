import React from 'react';
import GridItem from '@/components/ui/chakra/GridItem';
import Box from '@/components/ui/chakra/Box';
import Text from '@/components/ui/chakra/Text';
import SimpleGrid from '@/components/ui/chakra/SimpleGrid';
import Quicklink from './quicklink';
import { quicklink } from '@/data/quicklink';
import Link from 'next/link';

export default function Bottom() {
  return (
    <Box mt={'2.5rem'}>
      <Text mb={{ base: '1.8rem', md: '2.3rem' }} textStyle={'subHeading'}>
        Quick Access Links
      </Text>
      <SimpleGrid rowGap={'2.5rem'} gap={'1.4rem'} columns={{ base: 1, md: 3 }}>
        {quicklink.map((item, index) => (
          <GridItem key={index}>
            <Link href={item.path}>
              <Quicklink {...item} />
            </Link>
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
}
