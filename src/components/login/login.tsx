'use client';
import React, { useState } from 'react';
import SizeWrapper from '../sizewrapper/SizeWrapper';
import { Box, Button, Center, Stack, Text } from '@chakra-ui/react';
import StringInput from '../Input/StringInput';
import PasswordInput from '../Input/PasswordInput';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <SizeWrapper>
        <Center mt={'6rem'}>
          <Box
            w={'40rem'}
            px={'4rem'}
            py={'4rem'}
            rounded={'.8rem'}
            bg={'white'}
          >
            <Text textAlign={'center'} textStyle={'subHeading'} mb={'1rem'}>
              Login{' '}
            </Text>
            <form action="">
              <Stack spacing={'2rem'}>
                <StringInput
                  formControlProps={{ label: 'Email' }}
                  inputProps={{
                    placeholder: 'Enter email',
                    value: email,
                    onChange: (e) => {
                      setEmail(e.target.value);
                    },
                  }}
                />
                <PasswordInput
                  formControlProps={{ label: 'Password' }}
                  inputProps={{
                    placeholder: 'Enter password',
                    value: password,
                    onChange: (e) => {
                      setPassword(e.target.value);
                    },
                  }}
                />

                <Button
                  fontWeight={600}
                  py={'1rem'}
                  minW={'100%'}
                  mt={'2rem'}
                  flex={1}
                >
                  Login
                </Button>
              </Stack>
            </form>
          </Box>
        </Center>
      </SizeWrapper>
    </div>
  );
}
