/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useEffect, useState } from 'react';
import SizeWrapper from '../sizewrapper/SizeWrapper';
import { Box, Button, Center, Stack, Text } from '@chakra-ui/react';
import StringInput from '../Input/StringInput';
import PasswordInput from '../Input/PasswordInput';
import { signIn, useSession } from 'next-auth/react';
import { useToast } from '@/hooks/useToast';
import { useRouter } from 'next/navigation';

export default function Login() {
  const session = useSession();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setloading] = useState(false);
  const toast = useToast();

  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setloading(true);
    const response = await signIn('credentials', {
      email,
      password,
      // callbackUrl: `${window.location.origin}/`,
      redirect: false,
    });
    // console.log('response is ', response?.error);

    if (response?.ok) {
      setloading(false);
      window.location = '/' as any;
      // router.refresh();
      return;
    } else {
      setloading(false);
      toast({ description: 'Unable to login', status: 'error' });
      return;
    }
  };

  useEffect(() => {
    if (session?.data?.user) {
      router.push('/');
    }
  }, [session]);

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
            <form onSubmit={loginUser}>
              <Stack spacing={'2rem'}>
                <StringInput
                  formControlProps={{ label: 'Email', isRequired: true }}
                  inputProps={{
                    placeholder: 'Enter email',
                    value: email,
                    type: 'email',
                    onChange: (e) => {
                      setEmail(e.target.value);
                    },
                  }}
                />
                <PasswordInput
                  formControlProps={{ label: 'Password', isRequired: true }}
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
                  type="submit"
                >
                  {loading ? 'Loading...' : 'Login'}
                </Button>
              </Stack>
            </form>
          </Box>
        </Center>
      </SizeWrapper>
    </div>
  );
}
