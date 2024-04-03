'use client';
import CustomSelect from '@/components/Input/CustomSelect';
import CustomTextArea from '@/components/Input/CustomTextArea';
import StringInput from '@/components/Input/StringInput';
import { ServiceTypeEnum } from '@/enum/service';
import { mapEnumToArray } from '@/utils/options-helper';
import {
  Box,
  Button,
  Center,
  GridItem,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export default function LogServiceModal({ id }: any) {
  return (
    <Box pb={'2rem'}>
      <Text
        mb={'1.2rem'}
        fontWeight={700}
        fontFamily={'heading'}
        fontSize={'1.8rem'}
      >
        Log New Service for Vehicle
      </Text>
      <Text mb={'2rem'} color={'#5D5E5F'}>
        Please fill out the following form to log a new service appointment for
        the selected vehicle
      </Text>

      <form action="">
        <SimpleGrid gap={'1.2rem'} columns={2}>
          <GridItem>
            <StringInput
              formControlProps={{
                label: 'Vehicle ID',
                isDisabled: true,
              }}
              inputProps={{ value: id }}
            />
          </GridItem>

          <GridItem>
            <CustomSelect
              placeholder="Type to search..."
              options={mapEnumToArray(ServiceTypeEnum)}
              onChange={(val) => {
                // console.log('value is value ', val);
                return val;
              }}
              label="Service Type"
            />
          </GridItem>
        </SimpleGrid>

        <GridItem mt={'1rem'} colSpan={6}>
          <CustomTextArea
            formControlProps={{
              label: 'Comment',
            }}
          />
        </GridItem>

        <Center mt={'4rem'}>
          <Button minW={'11rem'}>Save</Button>
        </Center>
      </form>
    </Box>
  );
}
