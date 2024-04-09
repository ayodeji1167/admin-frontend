import React from 'react';

import GridItem from '@/components/ui/chakra/GridItem';
import SimpleGrid from '@/components/ui/chakra/SimpleGrid';
import StringInput from '@/components/Input/StringInput';

export default function UserForm() {
  return (
    <SimpleGrid px={'2.5rem'} mt={'1.5rem'} gap={'1.2rem'} columns={2}>
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
            label: 'Email',
          }}
          inputProps={{ placeholder: 'Enter customers email' }}
        />
      </GridItem>
      <GridItem width={'100%'}>
        <StringInput
          formControlProps={{
            label: 'Address',
          }}
          inputProps={{ placeholder: 'Enter customers address' }}
        />
      </GridItem>
    </SimpleGrid>
  );
}
