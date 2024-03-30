'use client';
import CustomSelect from '@/components/Input/CustomSelect';
import StringInput from '@/components/Input/StringInput';
import { cars } from '@/data/cars';
import { getCarModelOptions, getCarOptions } from '@/utils/select-format';
import { Box, Divider, GridItem, SimpleGrid, Text } from '@chakra-ui/react';
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
                label="Make"
              />{' '}
            </GridItem>
          </SimpleGrid>
        </form>
      </Box>
    </Box>
  );
}
