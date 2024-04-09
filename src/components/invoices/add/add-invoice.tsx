'use client';
import SizeWrapper from '@/components/sizewrapper/SizeWrapper';
import React, { useState } from 'react';

import CustomBreadcrumb from '@/components/common/CustomBreadcrumb';
import { Flex, Button, Divider, Box, Text } from '@chakra-ui/react';
import CustomerSwicth from '../../common/switch/customer-switch';
import SearchCustomer from '@/components/common/search/SearchCustomer';
import UserForm from './user-form';
import VehicleSwitch from '@/components/common/switch/vehicle-switch';
import SearchVehicle from '@/components/common/search/SearchVehicle';

export default function AddInvoice() {
  const [isExistingCustomer, setIsExistingCustomer] = useState(false);
  const [isExistingVehicle, setIsExistingVehicle] = useState(false);

  return (
    <div>
      <SizeWrapper>
        <form>
          <Flex
            alignItems={'center'}
            justifyContent={'space-between'}
            pt={'2rem'}
          >
            <Box>
              <Text mb={'.5rem'} textStyle={'subHeading'}>
                Create New Invoice
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
          <Box bg={'white'}>
            <Box pb={'3rem'} mt={'2rem'} pt={'1.6rem'} rounded={'.6rem'}>
              <CustomerSwicth
                setIsExistingCustomer={setIsExistingCustomer}
                isExistingCustomer={isExistingCustomer}
              />
              <Text
                px={'2.5rem'}
                pb={'.8rem'}
                variant={'subHeading'}
                fontWeight={500}
                mt={'2rem'}
              >
                Customer Information
              </Text>
              <Divider />

              {isExistingCustomer ? <SearchCustomer /> : <UserForm />}
            </Box>
            <Box
              pb={'3rem'}
              mt={'2rem'}
              pt={'1.6rem'}
              bg={'white'}
              rounded={'.6rem'}
            >
              <VehicleSwitch
                setIsExistingVehicle={setIsExistingVehicle}
                isExistingVehicle={isExistingVehicle}
              />
              <Text
                px={'2.5rem'}
                pb={'.8rem'}
                variant={'subHeading'}
                fontWeight={500}
                mt={'2rem'}
              >
                Vehicle Information
              </Text>
              <Divider />

              {isExistingVehicle ? <SearchVehicle /> : <UserForm />}
            </Box>
          </Box>
        </form>
      </SizeWrapper>
    </div>
  );
}
