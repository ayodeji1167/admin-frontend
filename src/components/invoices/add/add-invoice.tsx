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
  useBreakpointValue,
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
import { useAddInvoice } from '@/hooks/invoice/useAddInvoice';
// import { ConsentModal } from '@/components/common/Modals/ConsentModal';

export default function AddInvoice({ serviceId }: { serviceId: string }) {
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
  } = useAddInvoice({ serviceId });
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <div>
      <SizeWrapper>
        {/* <Flex
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
          </Flex> */}
        <Box bg={'white'} pb={'3rem'}>
          {/* <Box pb={'3rem'} mt={'2rem'} pt={'1.6rem'} rounded={'.6rem'}>
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
            </Box> */}

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
              px={{ base: '1rem', md: '2.5rem' }}
              pb={'.8rem'}
              mt={{ base: '0', md: '2rem' }}
            >
              <Text
                variant={'subHeading'}
                fontSize={{ base: '.8rem', md: '1rem' }}
                fontWeight={500}
              >
                Invoice Information
              </Text>

              <Flex
                alignItems={'center'}
                fontSize={{ base: '.8rem', md: '1.2rem' }}
                fontWeight={600}
                color={'#2574C3'}
                cursor={'pointer'}
                gap={'.8rem'}
                onClick={addItem}
              >
                <GoPlus size={isDesktop ? '2rem' : '1rem'} />
                <Text>Add new</Text>
              </Flex>
            </Flex>
            <Divider />

            {/* <InvoiceForm
                setInvoiceItems={setInvoiceItems}
                invoiceItems={invoiceItems}
              /> */}

            <Box px={{ base: '1rem', md: '2.5rem' }} mt={'1.5rem'}>
              <SimpleGrid gap={'1.2rem'} columns={{ base: 1, md: 3 }}>
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

              <Stack minH={'10vh'} mt={'2rem'} mb="1rem">
                {invoiceItems.map((item) => (
                  // <Stack key={item.service}>
                  <Flex
                    key={item.service}
                    alignItems={{ base: 'flex-end', md: 'center' }}
                    justifyContent={'space-between'}
                    py={'.5rem'}
                    borderBottom={'1px solid black'}
                    textTransform={'uppercase'}
                    fontWeight={600}
                    flexWrap={'wrap'}
                  >
                    <Flex
                      flex={1}
                      gap={{ base: '.5rem', md: '0' }}
                      flexDir={{ base: 'column', md: 'row' }}
                      justifyContent={'space-between'}
                    >
                      <Text
                        flex={1}
                        textTransform={'uppercase'}
                        fontWeight={600}
                        fontSize={{ base: '.8rem', md: '1rem' }}
                        whiteSpace={'nowrap'}
                      >
                        {item.service}
                      </Text>
                      <Flex flex={1}>
                        <Text
                          flex={1}
                          textTransform={'uppercase'}
                          fontWeight={600}
                        >
                          {item.quantity}
                        </Text>
                        <Text>{item.formattedAmount}</Text>
                      </Flex>
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
                  // </Stack>
                ))}
              </Stack>
            </Box>
          </Box>
          {invoiceItems.length > 0 && (
            <Center mt={{ base: '1rem', md: '0' }}>
              <Button isLoading={isPending} minW={'9rem'} onClick={onSave}>
                Create Invoice
              </Button>
            </Center>
          )}
        </Box>
        {/* <ConsentModal  isOpen={isOpen}onClose={onClose} setProceed={setProceed}/> */}
      </SizeWrapper>
    </div>
  );
}
