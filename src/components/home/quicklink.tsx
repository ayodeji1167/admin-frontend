import { StaticImageData } from 'next/image';
import React from 'react';
import Box from '@/components/ui/chakra/Box';
import Text from '@/components/ui/chakra/Text';
import Image from '@/components/ui/chakra/Image';
export interface QuickLinkProps {
  name: string;
  path: string;
  description: string;
  image: StaticImageData;
}
export default function Quicklink({
  name,
  //   path,
  description,
  image,
}: QuickLinkProps) {
  return (
    <Box rounded={'.5rem'} overflow={'hidden'} bg="white">
      <Box>
        <Image src={image.src} alt={name} objectFit={'cover'} />
      </Box>
      <Box pt={'.9rem'} pl={'1.5rem'} pb={{ base: '1rem', md: '1.6rem' }}>
        <Text textStyle={'subHeading'} mb={'.6rem'}>
          {name}
        </Text>
        <Text fontSize={'.9rem'}>{description}</Text>
      </Box>
    </Box>
  );
}
