'use client';
import SizeWrapper from '@/components/sizewrapper/SizeWrapper';
import React, { useState } from 'react';

import CustomBreadcrumb from '@/components/common/CustomBreadcrumb';
import {
  Flex,
  Button,
  Divider,
  Box,
  Text,
  GridItem,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';
import CustomerSwicth from '../../common/switch/customer-switch';
import SearchCustomer from '@/components/common/search/SearchCustomer';
import UserForm from './user-form';
import VehicleSwitch from '@/components/common/switch/vehicle-switch';
import SearchVehicle from '@/components/common/search/SearchVehicle';
import { GoPlus } from 'react-icons/go';
import StringInput from '@/components/Input/StringInput';
import { useToast } from '@/hooks/useToast';

export default function AddInvoice() {
  const toast = useToast();
  const [isExistingCustomer, setIsExistingCustomer] = useState(false);
  const [isExistingVehicle, setIsExistingVehicle] = useState(false);
  const [invoiceItems, setInvoiceItems] = useState<
    Array<{ service: string; amount: string }>
  >([]);
  const [service, setService] = useState('');
  const [amount, setAmount] = useState('');

  const addItem = () => {
    if (!service || !amount) {
      toast({ description: 'Add service/amount', status: 'error' });
      return;
    }
    setInvoiceItems((prev) => [...prev, { service, amount }]);
    setAmount('');
    setService('');
  };

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
          <Box bg={'white'} pb={'3rem'}>
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

            <Box
              pb={'3rem'}
              mt={'2rem'}
              pt={'1.6rem'}
              bg={'white'}
              rounded={'.6rem'}
            >
              <Flex
                justifyContent={'space-between'}
                alignItems={'center'}
                px={'2.5rem'}
                pb={'.8rem'}
                mt={'2rem'}
              >
                <Text variant={'subHeading'} fontWeight={500}>
                  Invoice Information
                </Text>

                <Flex
                  alignItems={'center'}
                  fontSize={'1.2rem'}
                  fontWeight={600}
                  color={'#2574C3'}
                  cursor={'pointer'}
                  gap={'.8rem'}
                  onClick={addItem}
                >
                  <GoPlus size={'2rem'} />
                  <Text>Add new</Text>
                </Flex>
              </Flex>
              <Divider />

              {/* <InvoiceForm
                setInvoiceItems={setInvoiceItems}
                invoiceItems={invoiceItems}
              /> */}

              <Box px={'2.5rem'} mt={'1.5rem'}>
                <SimpleGrid gap={'1.2rem'} columns={{ base: 1, md: 2 }}>
                  <GridItem>
                    <StringInput
                      formControlProps={{
                        label: 'Service',
                      }}
                      inputProps={{
                        placeholder: 'Enter Service',
                        onChange: (e) => {
                          setService(e.target.value);
                        },
                        value: service,
                      }}
                    />
                  </GridItem>{' '}
                  <GridItem>
                    <StringInput
                      formControlProps={{
                        label: 'Amount',
                      }}
                      inputProps={{
                        placeholder: 'Enter amount',
                        onChange: (e) => {
                          setAmount(e.target.value);
                        },
                        value: amount,
                      }}
                    />
                  </GridItem>
                </SimpleGrid>

                {invoiceItems.map((item) => (
                  <Stack key={item.service}>
                    <Flex
                      alignItems={'center'}
                      justifyContent={'space-between'}
                      py={'.5rem'}
                      borderBottom={'1px solid black'}
                    >
                      <Text>{item.service}</Text>
                      <Text>{item.amount}</Text>
                    </Flex>
                  </Stack>
                ))}
              </Box>
            </Box>
          </Box>
        </form>
      </SizeWrapper>
    </div>
  );
}
