'use client';

import { Box, Divider, GridItem, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import StringInput from '../Input/StringInput';

export default function Userform() {
  return (
    <Box>
      <Text
        mb={'.7rem'}
        fontFamily={'body'}
        textStyle={'subHeading'}
        fontWeight={500}
      >
        User Information
      </Text>
      <Divider />
      <SimpleGrid mt={'1.5rem'} gap={'1.2rem'} columns={{ base: 1, md: 2 }}>
        <GridItem>
          <StringInput
            formControlProps={{
              label: 'First name',
            }}
            inputProps={{ placeholder: 'Enter customers first name' }}
          />
        </GridItem>{' '}
        <GridItem>
          <StringInput
            formControlProps={{
              label: 'Last name',
            }}
            inputProps={{ placeholder: 'Enter customers last name' }}
          />
        </GridItem>
        <GridItem>
          <StringInput
            formControlProps={{
              label: 'Phone number',
            }}
            inputProps={{ placeholder: 'Enter customers phone number' }}
          />
        </GridItem>
        <GridItem>
          <StringInput
            formControlProps={{
              label: 'Address',
            }}
            inputProps={{ placeholder: 'Enter customers address' }}
          />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}
