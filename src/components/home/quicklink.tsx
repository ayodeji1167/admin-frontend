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
    <Box>
      <Box>
        <Image src={image.src} alt={name} objectFit={'cover'} />
      </Box>
      <Box>
        <Text>{name}</Text>
        <Text>{description}</Text>
      </Box>
    </Box>
  );
}
