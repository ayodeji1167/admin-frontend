'use client';
import SizeWrapper from '@/components/sizewrapper/SizeWrapper';
import React from 'react';

// import CustomBreadcrumb from '@/components/common/CustomBreadcrumb';
import {
  Flex,
  Button,
  Divider,
  Box,
  Text,
  GridItem,
  SimpleGrid,
  Stack,
  Center,
} from '@chakra-ui/react';
// import CustomerSwicth from '../../common/switch/customer-switch';
// import SearchCustomer from '@/components/common/search/SearchCustomer';
// import UserForm from './user-form';
// import VehicleSwitch from '@/components/common/switch/vehicle-switch';
// import SearchVehicle from '@/components/common/search/SearchVehicle';
import { GoPlus } from 'react-icons/go';
import { BsTrash } from 'react-icons/bs';
import NumericInput from '@/components/Input/NumericInput';
import CustomSelect from '@/components/Input/CustomSelect';
import { serviceOptions } from '@/data/options/invoices';
import StringInput from '@/components/Input/StringInput';

import { useEditInvoice } from '@/hooks/invoice/useEditinvoice';
import LottieLoader from '@/components/Loader/LottieLoader';
// import { ConsentModal } from '@/components/common/Modals/ConsentModal';

export default function EditInvoice({ id }: { id: string }) {
  const {
    onSave,
    deleteItem,
    selectedOption,
    isPending,
    addItem,
    invoiceItems,
    amount,
    setAmount,
    quantity,
    setQuantity,
    setService,
    setSelectedOption,
    setFormattedAmount,
    fetchInvoiceLoading,
  } = useEditInvoice({ id });

  if (fetchInvoiceLoading) {
    return <LottieLoader />;
  }

  return (
    <div>
      <SizeWrapper>
        <Box bg={'white'} pb={'3rem'}>
          <Box
            pb={'1rem'}
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
              <SimpleGrid gap={'1.2rem'} columns={{ base: 2, md: 3 }}>
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
                  <StringInput
                    inputProps={{
                      type: 'number',
                      placeholder: 'Enter quantity',
                      onChange: (e) => {
                        setQuantity(Number(e.target.value));
                      },
                      value: quantity,
                    }}
                    formControlProps={{ isRequired: true, label: 'Quantity' }}
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

              <Box minH={'10vh'} mt={'2rem'}>
                {invoiceItems?.map((item) => (
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
                        <Text
                          flex={1}
                          textTransform={'uppercase'}
                          fontWeight={600}
                        >
                          {item.service}
                        </Text>
                        <Text
                          flex={1}
                          textTransform={'uppercase'}
                          fontWeight={600}
                        >
                          {item.quantity}
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
          {invoiceItems?.length > 0 && (
            <Center>
              <Button isLoading={isPending} minW={'9rem'} onClick={onSave}>
                Edit Invoice
              </Button>
            </Center>
          )}
        </Box>
        {/* <ConsentModal  isOpen={isOpen}onClose={onClose} setProceed={setProceed}/> */}
      </SizeWrapper>
    </div>
  );
}
