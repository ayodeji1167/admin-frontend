import { Logo } from '@/components/Logo/Logo';
import { Box, Center, Spinner, Text, VisuallyHidden } from '@chakra-ui/react';

type Props = {
  text?: string;
};
export const LogoLoader = ({ text = 'Loading...' }: Props) => {
  return (
    <Box
      position={'absolute'}
      top={0}
      left={0}
      role="status"
      w={'full'}
      h={'100%'}
      overflow="hidden"
      inset={0}
    >
      <Center gap="4" w={'full'} h={'full'} flexDirection={'column'}>
        <Spinner size={'sm'} color="primary.500" />
        <Box w={'3rem'}>
          <Logo />
        </Box>
        <Text fontSize={'xs'} fontWeight={'semibold'} color={'primary.100'}>
          {text}
        </Text>
      </Center>
      <VisuallyHidden>Loading...</VisuallyHidden>
    </Box>
  );
};
