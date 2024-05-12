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

import { GoPlus } from 'react-icons/go';
import { BsTrash } from 'react-icons/bs';
import NumericInput from '@/components/Input/NumericInput';
import CustomSelect from '@/components/Input/CustomSelect';
import { serviceOptions } from '@/data/options/invoices';
import StringInput from '@/components/Input/StringInput';
import { useAddInvoice } from '@/hooks/invoice/useAddInvoice';
import { formatNumber } from '@/utils/format-number';

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
  // console.log('number is ', formatNumber(quantity * Number(amount)));

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
              <SimpleGrid gap={'1.2rem'} columns={{ base: 1, md: 4 }}>
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
                      label: 'Unit price',
                    }}
                    inputProps={{
                      placeholder: 'Enter amount',

                      value: amount,
                    }}
                  />
                </GridItem>
                <GridItem>
                  <StringInput
                    inputProps={{
                      type: 'text',
                      placeholder: '₦0',

                      value: !isNaN(quantity * Number(amount))
                        ? `₦${formatNumber(quantity * Number(amount))}`
                        : '',
                    }}
                    formControlProps={{
                      label: 'Amount',
                      isReadOnly: true,
                    }}
                  />
                </GridItem>
              </SimpleGrid>

              <Stack minH={'10vh'} mt={'2rem'} mb="1rem">
                {invoiceItems.map((item: any) => (
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
                        <Text>₦{formatNumber(item.price * item.quantity)}</Text>
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
