'use client';
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
import { useSession } from 'next-auth/react';
import { useBreakpointValue } from '@chakra-ui/react';

export default function Header() {
  const session = useSession();
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Box w={'100%'} overflow={'hidden'} py={'1rem'} bg={'#174777'}>
      <SizeWrapper>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Box w={{ base: '8rem', md: '10rem' }}>
            <Logo to="/" />
          </Box>

          {session?.data?.user && (
            <>
              <Flex
                alignItems={'center'}
                display={{ base: 'none', md: 'flex' }}
                gap="1.2rem"
              >
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
              <Flex gap={{ base: '.5rem', md: '1.2rem' }} alignItems={'center'}>
                <IoNotificationsOutline
                  color="white"
                  size={isDesktop ? '1.7rem' : '0rem'}
                />

                <HeaderMenu />
              </Flex>
            </>
          )}
        </Flex>
      </SizeWrapper>
    </Box>
  );
}
