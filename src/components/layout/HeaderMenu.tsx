'use client';
import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
  Image,
  Flex,
  Text,
  Divider,
  Button,
  PopoverArrow,
} from '@chakra-ui/react';
import React from 'react';
import userAdmin from '@/assets/useradmin.jpeg';
import { IoIosArrowDown } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';
import { PiSignOutLight } from 'react-icons/pi';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
export default function HeaderMenu() {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const router = useRouter();
  const { logout } = useAuth();
  const handleLogout = () => {
    logout && logout();
    onClose();
    router.refresh();
  };

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
          <Box overflow={'hidden'} borderRadius={'50%'} h={'3rem'} w={'3rem'}>
            <Image
              w={'100%'}
              h={'100%'}
              objectFit={'cover'}
              src={userAdmin.src}
              alt="user"
            />
          </Box>

          <IoIosArrowDown size={'1.7rem'} color={'white'} />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        w={'20rem'}
        mr={'2rem'}
        rounded={'1rem'}
        border="none"
        boxShadow="0px 1px 2px 0px #0000001A, 0px 4px 4px 0px #00000017, 0px 9px 5px 0px #0000000D, 0px 15px 6px 0px #00000003, 0px 24px 7px 0px #00000000, 0px 1px 0px 0px #6867671A, 0px -4px 4px 0px #0000001A" // Apply the specified box shadows
      >
        <PopoverArrow />

        <Link style={{ textDecoration: 'none' }} href={'/settings'}>
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
          onClick={handleLogout}
          color={'#BB1111'}
        >
          <PiSignOutLight />
          <Text>Log Out</Text>
        </Flex>
      </PopoverContent>
    </Popover>
  );
}
