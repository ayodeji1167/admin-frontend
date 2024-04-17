'use client';
import CustomSelect from '@/components/Input/CustomSelect';
import StringInput from '@/components/Input/StringInput';
import Userform from '@/components/userform/userform';
import { cars } from '@/data/cars';
import {
  carTypeOptions,
  fuelTypeOptions,
  yearOptions,
} from '@/data/vehicle-options';
import { getCarModelOptions, getCarOptions } from '@/utils/select-format';
import {
  Box,
  Button,
  Center,
  Divider,
  GridItem,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

export default function Bottom() {
  const make = getCarOptions(cars) || [];
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModels, setSelectedModels] = useState<any>([]);

  useEffect(() => {
    if (selectedMake) {
      const aCar = cars?.find((car) => car?.carName === selectedMake);
      setSelectedModels(getCarModelOptions(aCar?.carModels));
    }
  }, [selectedMake]);

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
      <Box pb={'2rem'} px={'2.5rem'} mt={'1.5rem'}>
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
              <StringInput
                formControlProps={{
                  label: 'Name',
                }}
                inputProps={{ placeholder: 'Enter the Vehicle name' }}
              />
            </GridItem>
            <GridItem>
              <CustomSelect
                placeholder="Type to search..."
                options={make}
                onChange={(val) => {
                  // console.log('value is value ', val);
                  setSelectedMake(val);
                }}
                label="Make"
              />
            </GridItem>
            <GridItem>
              <CustomSelect
                placeholder="Type to search..."
                options={selectedModels}
                onChange={(val) => {
                  return val;
                }}
                label="Model"
              />
            </GridItem>
            <GridItem>
              <CustomSelect
                placeholder="Select business"
                options={[
                  { label: 'GTB', value: 'GTB' },
                  { label: 'Coca cola', value: 'coca cola' },
                ]}
                onChange={(val) => {
                  return val;
                }}
                label="Business"
              />
            </GridItem>
            <GridItem>
              <CustomSelect
                placeholder="Type to search..."
                options={yearOptions}
                onChange={(val) => {
                  return val;
                }}
                label="Year"
              />
            </GridItem>
            <GridItem>
              <CustomSelect
                placeholder="Type to search..."
                options={carTypeOptions}
                onChange={(val) => {
                  return val;
                }}
                label="Vehicle Type"
              />
            </GridItem>
            <GridItem>
              <CustomSelect
                placeholder="Type to search..."
                options={fuelTypeOptions}
                onChange={(val) => {
                  return val;
                }}
                label="Fuel Type"
              />
            </GridItem>
            <GridItem>
              <StringInput
                formControlProps={{
                  label: 'Color',
                }}
                inputProps={{ placeholder: 'Enter the Vehicle name' }}
              />
            </GridItem>
          </SimpleGrid>
          <Box mt={'3.5rem'}>
            <Userform handleApiSubmit={() => {}} />
          </Box>
          <Center mt={'4rem'}>
            <Button minW={'11rem'}>Save</Button>
          </Center>
        </form>
      </Box>
    </Box>
  );
}
