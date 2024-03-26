import React from 'react';
import Flex from '@/components/ui/chakra/Flex';
import Box from '@/components/ui/chakra/Box';
import Text from '@/components/ui/chakra/Text';
import { Logo } from '../Logo/Logo';
import { navs } from '@/data/nav';
import Link from 'next/link';
import { IoNotificationsOutline } from 'react-icons/io5';
import HeaderMenu from './HeaderMenu';
import SizeWrapper from '../sizewrapper/SizeWrapper';

export default function Header() {
  return (
    <Box w={'100vw'} py={'1rem'} bg={'#174777'}>
      <SizeWrapper>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Box w={'10rem'}>
            <Logo to="/" />
          </Box>

          <Flex alignItems={'center'} gap="1.2rem">
            {navs.map((item) => (
              <Link
                style={{ textDecoration: 'none' }}
                key={item.name}
                href={item.path}
              >
                <Text color="#E9F1F9">{item.name}</Text>
              </Link>
            ))}
          </Flex>

          <Flex gap={'1.2rem'} alignItems={'center'}>
            <IoNotificationsOutline color="white" size={'1.7rem'} />

            <HeaderMenu />
          </Flex>
        </Flex>
      </SizeWrapper>
    </Box>
  );
}
