import { StaticImageData } from 'next/image';
import React from 'react';
import Box from '@/components/ui/chakra/Box';
import Text from '@/components/ui/chakra/Text';
import Image from '@/components/ui/chakra/Image';
interface QuickLinkProps {
  name: string;
  path: string;
  description: string;
  image: StaticImageData;
}
export default function Quicklinks({
  name,
  //   path,
  description,
  image,
}: QuickLinkProps) {
  return (
    <Box>
      <Box>
        <Image
          src={image.src}
          alt={name}
          w={'100%'}
          h={'100%'}
          objectFit={'cover'}
        />
      </Box>
      <Box>
        <Text>{name}</Text>
        <Text>{description}</Text>
      </Box>
    </Box>
  );
}
