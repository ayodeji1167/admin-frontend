import StringInput from '@/components/Input/StringInput';
import { Box, Divider, GridItem, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

export default function Bottom() {
  return (
    <Box rounded={'.8rem'} mt={'1.5rem'} bg={'white'} pt={'1.5rem'}>
      <Text
        mb={'.7rem'}
        fontFamily={'body'}
        pl={'2.5rem'}
        textStyle={'subHeading'}
        fontWeight={500}
      >
        Vehicle Information
      </Text>
      <Divider />
      <Box px={'2.5rem'} mt={'1.5rem'}>
        <form action="">
          <SimpleGrid gap={'1.2rem'} columns={2}>
            <GridItem>
              <StringInput
                formControlProps={{
                  label: 'VIN (Vehicle Identification Number)',
                }}
                inputProps={{ placeholder: 'Enter the Vehicle VIN' }}
              />
            </GridItem>
            <GridItem>
              <StringInput />
            </GridItem>
            <GridItem>
              <StringInput />
            </GridItem>
          </SimpleGrid>
        </form>
      </Box>
    </Box>
  );
}
