'use client';
import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  Flex,
  useDisclosure,
  Text,
  Icon,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export default function Custompopover({
  children,
  actionlist,
}: {
  children: ReactNode;
  actionlist: any;
}) {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <Popover
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      placement="bottom"
      closeOnBlur={true}
    >
      <PopoverTrigger>
        <Button
          variant={'ghost'}
          role="button"
          gap=".7rem"
          alignItems={'center'}
          cursor={'pointer'}
        >
          {children}
          <IoIosArrowDown size={'1.7rem'} color={'white'} />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        w={{ base: '14rem', md: '20rem' }}
        mr={'2rem'}
        rounded={'1rem'}
        border="none"
        boxShadow="0px 1px 2px 0px #0000001A, 0px 4px 4px 0px #00000017, 0px 9px 5px 0px #0000000D, 0px 15px 6px 0px #00000003, 0px 24px 7px 0px #00000000, 0px 1px 0px 0px #6867671A, 0px -4px 4px 0px #0000001A" // Apply the specified box shadows
      >
        <PopoverArrow />
        {actionlist.map((item: any) => {
          if (item.isLink) {
            return (
              <Link
                key={item.name}
                style={{ textDecoration: 'none' }}
                href={item.path}
              >
                <Flex
                  fontSize={{ base: '.81rem', md: '1rem' }}
                  alignItems={'center'}
                  gap={'.6rem'}
                  p={{ base: '.61rem', md: '1rem' }}
                  px={'1rem'}
                  color={item.color}
                  _hover={{
                    bg: '#3855B30A',
                  }}
                >
                  <Icon as={item.icon} />
                  <Text>{item.name}</Text>
                </Flex>
              </Link>
            );
          } else {
            return (
              <Flex
                key={item.name}
                cursor={'pointer'}
                fontSize={{ base: '.81rem', md: '1rem' }}
                alignItems={'center'}
                gap={'.6rem'}
                p={{ base: '.61rem', md: '1rem' }}
                px={'1rem'}
                onClick={item.clickFn}
                color={item.color}
                _hover={{
                  bg: '#3855B30A',
                }}
              >
                <Icon as={item.icon} />
                <Text>{item.name}</Text>
              </Flex>
            );
          }
        })}

        {/* <Link style={{ textDecoration: 'none' }} href={'/settings'}>
          <Flex
            fontSize={'1.3rem'}
            alignItems={'center'}
            gap={'.6rem'}
            p={'1rem'}
          >
            <IoSettingsOutline />
            <Text>Account Settings</Text>
          </Flex>
        </Link>
        <Divider />
        <Flex
          cursor={'pointer'}
          fontSize={'1.3rem'}
          alignItems={'center'}
          gap={'.6rem'}
          p={'1rem'}
          onClick={onClose}
          color={'#BB1111'}
        >
          <PiSignOutLight />
          <Text>Log Out</Text>
        </Flex> */}
      </PopoverContent>
    </Popover>
  );
}
