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
import { useToast } from '@/hooks/useToast';
import { BsTrash } from 'react-icons/bs';
import NumericInput from '@/components/Input/NumericInput';
import CustomSelect from '@/components/Input/CustomSelect';
import { serviceOptions } from '@/data/options/invoices';

export default function AddInvoice() {
  const toast = useToast();
  const [isExistingCustomer, setIsExistingCustomer] = useState(false);
  const [isExistingVehicle, setIsExistingVehicle] = useState(false);
  const [invoiceItems, setInvoiceItems] = useState<
    Array<{ service: string; amount: any; formattedAmount: string }>
  >([]);
  const [service, setService] = useState('');
  const [amount, setAmount] = useState('');
  const [formattedAmount, setFormattedAmount] = useState('');
  const [selectedOption, setSelectedOption] = useState<any>();

  const addItem = () => {
    if (!service || !amount) {
      toast({ description: 'Add service/amount', status: 'error' });
      return;
    }
    invoiceItems.forEach((item) => {
      if (item.service.toLowerCase() === service.toLowerCase()) {
        const newItems = invoiceItems.filter(
          (item) => item.service.toLowerCase() !== service.toLowerCase()
        );
        setInvoiceItems(newItems);
      }
    });
    setInvoiceItems((prev) => [...prev, { service, amount, formattedAmount }]);
    setAmount('');
    setService('');
    setFormattedAmount('');
    setSelectedOption(null);
  };

  const deleteItem = (service: string) => {
    const newItems = invoiceItems.filter(
      (item) => item.service.toLowerCase() !== service.toLowerCase()
    );
    setInvoiceItems(newItems);
  };

  const onSave = () => {
    // console.log('invoices items are ====>', invoiceItems);
    return invoiceItems;
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
              <Button onClick={onSave} minW={'9rem'}>
                Save and Submit
              </Button>
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
                    <CustomSelect
                      placeholder="Type to search..."
                      options={serviceOptions.map((item) => ({
                        label: item,
                        value: item,
                      }))}
                      onChange={(e) => {
                        setService(e.value);
                        setSelectedOption(e);
                      }}
                      label="Service"
                      selectedOption={selectedOption}
                    />
                  </GridItem>
                  <GridItem>
                    <NumericInput
                      onValueChange={(values: any) => {
                        setAmount(values.floatValue);
                        setFormattedAmount(values.formattedValue);
                      }}
                      formControlProps={{
                        label: 'Amount',
                      }}
                      inputProps={{
                        placeholder: 'Enter amount',
                        // onChange: (e) => {
                        //   console.log('e is ', e.target);

                        //   setAmount(e.target.value);
                        // },
                        value: amount,
                      }}
                    />
                  </GridItem>
                </SimpleGrid>

                <Box minH={'20vh'} mt={'2rem'}>
                  {invoiceItems.map((item) => (
                    <Stack key={item.service}>
                      <Flex
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        py={'.5rem'}
                        borderBottom={'1px solid black'}
                        textTransform={'uppercase'}
                        fontWeight={600}
                      >
                        <Flex flex={1} justifyContent={'space-between'}>
                          <Text textTransform={'uppercase'} fontWeight={600}>
                            {item.service}
                          </Text>
                          <Text>{item.formattedAmount}</Text>
                        </Flex>

                        <Box ml={'3rem'}>
                          <BsTrash
                            onClick={() => deleteItem(item.service)}
                            size={'1.3rem'}
                            color="red"
                            cursor={'pointer'}
                          />
                        </Box>
                      </Flex>
                    </Stack>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </form>
      </SizeWrapper>
    </div>
  );
}
