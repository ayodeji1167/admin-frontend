import { useSendJobCompletionApi } from '@/app/api/service/send-job-completion';
import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  StackDivider,
  Text,
  Box,
  Flex,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';

export default function SendJobCompletionmodal({
  id,
  //   onClose,
}: {
  id: string;
  onClose: any;
}) {
  const { mutateAsync, isPending } = useSendJobCompletionApi();
  const [to, setTo] = useState<'ganiu' | 'stephen' | 'partner' | string>('');

  const sendJobCompletion = async (to: 'ganiu' | 'stephen' | 'partner') => {
    setTo(to);
    // console.log({ id, to });

    // return;
    await mutateAsync({ id, to });
  };
  return (
    <Card shadow={'none'}>
      <CardHeader>
        <Heading size="md">Send Job Completion Report</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Flex alignItems={'center'} justifyContent={'space-between'}>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Mr Stephen
              </Heading>
              <Text pt="2" fontSize="sm">
                This will send the job completion to Mr Stephen
              </Text>
            </Box>
            <Button
              onClick={() => sendJobCompletion('stephen')}
              variant={'outline'}
              isLoading={isPending && to === 'stephen'}
              disabled={isPending}
            >
              Send
            </Button>
          </Flex>
          <Flex alignItems={'center'} justifyContent={'space-between'}>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Ganiu
              </Heading>
              <Text pt="2" fontSize="sm">
                This will send the job completion to Ganiu.
              </Text>
            </Box>
            <Button
              onClick={() => sendJobCompletion('ganiu')}
              variant={'outline'}
              isLoading={isPending && to === 'ganiu'}
              disabled={isPending}
            >
              Send
            </Button>
          </Flex>
          <Flex
            bg={'red.100'}
            p={'.6rem'}
            alignItems={'center'}
            justifyContent={'space-between'}
            rounded={'.4rem'}
          >
            <Box flex={1}>
              <Heading size="xs" textTransform="uppercase">
                Official Partner
              </Heading>
              <Text pt="2" fontSize="sm">
                This will send the job completion to the official partner.
              </Text>
            </Box>
            {/* <Input
              flex={1}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              name='"email'
              placeholder="Enter custom mail"
              _placeholder={{ opacity: 0.3 }}
            /> */}
            <Button
              isLoading={isPending && to === 'partner'}
              onClick={() => sendJobCompletion('partner')}
              disabled={isPending}
            >
              Send
            </Button>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
}
