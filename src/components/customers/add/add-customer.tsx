'use client';
import SizeWrapper from '@/components/sizewrapper/SizeWrapper';
import React from 'react';
import GridItem from '@/components/ui/chakra/GridItem';
import Box from '@/components/ui/chakra/Box';
import Flex from '@/components/ui/chakra/Flex';
import Text from '@/components/ui/chakra/Text';
import Button from '@/components/ui/chakra/Button';
import SimpleGrid from '@/components/ui/chakra/SimpleGrid';
import Divider from '@/components/ui/chakra/Divider';
import StringInput from '@/components/Input/StringInput';
import CustomBreadcrumb from '@/components/common/CustomBreadcrumb';

export default function AddCustomer() {
  return (
    <SizeWrapper>
      <form>
        <Flex
          alignItems={'center'}
          justifyContent={'space-between'}
          pt={'2rem'}
        >
          <Box>
            <Text mb={'.5rem'} textStyle={'subHeading'}>
              Add New Customer
            </Text>
            <CustomBreadcrumb />
          </Box>

          <Flex gap={'1.2rem'}>
            <Button
              border="1px solid #898A8C"
              bg={'white'}
              variant={'ghost'}
              minW={'9rem'}
            >
              Back
            </Button>
            <Button minW={'9rem'}>Save and Submit</Button>
          </Flex>
        </Flex>
        <Box
          pb={'3rem'}
          mt={'2rem'}
          pt={'1.6rem'}
          bg={'white'}
          rounded={'.6rem'}
        >
          <Text
            px={'2.5rem'}
            pb={'.8rem'}
            variant={'subHeading'}
            fontWeight={500}
          >
            Customer Information
          </Text>
          <Divider />
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
            <GridItem colSpan={12}>
              <StringInput
                formControlProps={{
                  label: 'Address',
                }}
                inputProps={{ placeholder: 'Enter customers address' }}
              />
            </GridItem>
          </SimpleGrid>
        </Box>
      </form>
    </SizeWrapper>
  );
}
