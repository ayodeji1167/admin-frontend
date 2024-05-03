'use client';
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  GridItem,
  // Image,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

import Link from 'next/link';
import LottieLoader from '@/components/Loader/LottieLoader';
import CustomModal from '@/components/common/Modals/CustomModal';
import moment from 'moment';

import { useGetService } from '@/hooks/service/useGetServices';
import UploadImages from '@/components/vehicle/view/upload-images';
import PDFViewer from '@/components/common/pdf/PdfView';
import { useGenerateInvoicePdf } from '@/app/api/service/generate-invoice-pdf';
import JobOrderImageModal from './job-order-modal';

function ServiceItem({
  name,
  value,
}: {
  name: string;
  value?: string | undefined;
}) {
  return (
    <Flex
      pl={'1.2rem'}
      fontSize={'1.2rem'}
      h={'2.3rem'}
      alignItems={'center'}
      gap={'.3rem'}
    >
      <Text>{name}:</Text>
      <Text textTransform={'uppercase'} fontWeight={600}>
        {value ? value : 'NULL'}
      </Text>
    </Flex>
  );
}
export default function ViewById({ id }: { id: string }) {
  const {
    isLoading,
    data,
    // hasImages,
    hasOwner,
    // images,
    addImagesDisclosure,
    ownerName,
  } = useGetService({ id });
  const invoiceIsAvailable = Boolean(data?.data?.invoice);
  const { data: invoicePdfData, isLoading: invoicePdfLoading } =
    useGenerateInvoicePdf(id, { enabled: invoiceIsAvailable });
  const pdfBuffer = invoicePdfData?.data?.data;
  const jobOrder = data?.data?.jobOrder;
  const jobOrderDisclosure = useDisclosure();

  if (isLoading) {
    return <LottieLoader />;
  } else {
    return (
      <Box
        pb={'2.5rem'}
        rounded={'.5rem'}
        mt={'1.2rem'}
        pt={'1.5rem'}
        bg={'white'}
      >
        <Flex
          px={'1.8rem'}
          pb={'1.5rem'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Text textStyle={'subHeading'}>Service Details</Text>

          <Link href={`/service/edit/${id}`}>
            <Button minW={'11rem'}>Edit Service</Button>
          </Link>
        </Flex>
        <Divider />
        <Box px={'1.8rem'} pt={'1.8rem'}>
          {/* {hasImages && (
            <Button
              mb={'1rem'}
              onClick={addImagesDisclosure.onOpen}
              fontSize={'1.2rem'}
              variant={'ghost'}
            >
              Add More images
            </Button>
          )}
          {hasImages ? (
            <SimpleGrid gap={'1.6rem'} columns={4}>
              {images?.map((item, index) => (
                <GridItem
                  rounded={'.6rem'}
                  overflow={'hidden'}
                  objectFit={'cover'}
                  key={index}
                >
                  <Image
                    h={'100%'}
                    w={'100%'}
                    objectFit={'cover'}
                    src={item}
                    alt={'vehicles' + index}
                  />
                </GridItem>
              ))}
            </SimpleGrid>
          ) : (
            <Flex
              mb={'2rem'}
              justifyContent={'center'}
              alignItems={'center'}
              gap={'1rem'}
            >
              <Text fontWeight={'500'} fontSize={'2rem'} fontStyle={'italic'}>
                Oops! This Service has no image
              </Text>
              <Button
                onClick={addImagesDisclosure.onOpen}
                fontSize={'1.2rem'}
                variant={'ghost'}
              >
                Add images
              </Button>
            </Flex>
          )} */}
          <Flex justifyContent={'space-between'}>
            {!jobOrder ? (
              <Flex
                mb={'2rem'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={'1rem'}
              >
                <Text fontWeight={'500'} fontSize={'2rem'}>
                  ADD JOB ORDER
                </Text>
                <Button
                  onClick={jobOrderDisclosure.onOpen}
                  fontSize={'1.2rem'}
                  variant={'ghost'}
                >
                  Add job order
                </Button>
              </Flex>
            ) : (
              <Link href={jobOrder?.url} target="_blank">
                <Button fontSize={'1.2rem'} variant={'ghost'}>
                  View job order
                </Button>
              </Link>
            )}

            {jobOrder && invoiceIsAvailable && (
              <Button variant={'outline'}>Send Job Completion Mail</Button>
            )}
          </Flex>
          <SimpleGrid
            rowGap={'.9rem'}
            columnGap={'1.2rem'}
            columns={{ base: 1, md: 2 }}
            mt={'2.5rem'}
            pb={'2rem'}
          >
            <GridItem h={'2.3rem'} bg={'#F8FBFF'}>
              <ServiceItem name="Status" value={data?.data?.status} />
            </GridItem>
            <GridItem bg={'#F8FBFF'}>
              <ServiceItem
                name="Time in"
                value={moment(data?.data?.timeIn).format(
                  'MMMM DD, YYYY, h:mm a'
                )}
              />
            </GridItem>
            <GridItem h={'2.3rem'} bg={'#EBEBEB'}>
              <ServiceItem
                name="Time out"
                value={
                  data?.data?.timeOut
                    ? moment(data?.data?.timeOut).format(
                        'MMMM DD, YYYY, h:mm a'
                      )
                    : 'NULL'
                }
              />
            </GridItem>
            <GridItem bg={'#EBEBEB'}>
              <ServiceItem
                name="Vehicle Make"
                value={data?.data?.vehicle?.make}
              />
            </GridItem>
            <GridItem bg={'#F8FBFF'}>
              <ServiceItem
                name="Vehicle Model"
                value={data?.data?.vehicle?.model}
              />
            </GridItem>
            {hasOwner && (
              <GridItem h={'2.3rem'} bg={'#F8FBFF'}>
                <ServiceItem name="Owner" value={ownerName} />
              </GridItem>
            )}
          </SimpleGrid>
        </Box>

        <Stack spacing={'2rem'} px={'2rem'}>
          {invoiceIsAvailable ? (
            <Box>
              <Flex fontWeight={600} fontSize={'1rem'} color={'primary.700'}>
                <Link href={`/invoices/edit/${data?.data?.invoice}`}>
                  Edit invoice
                </Link>
              </Flex>
              <PDFViewer
                buffer={pdfBuffer}
                isLoading={invoicePdfLoading}
                header="Invoice"
              />
            </Box>
          ) : (
            <Center>
              <Link href={`/invoices/add/${id}`}>
                <Button fontSize={'1.2rem'} variant={'ghost'}>
                  Generate Invoice
                </Button>
              </Link>
            </Center>
          )}
        </Stack>

        <CustomModal
          modalContentProps={{ minW: { base: '30rem', md: '60rem' } }}
          isOpen={addImagesDisclosure.isOpen}
          onClose={addImagesDisclosure.onClose}
        >
          <UploadImages onClose={addImagesDisclosure.onClose} id={id} />
        </CustomModal>
        <CustomModal
          modalContentProps={{ minW: { base: '30rem', md: '60rem' } }}
          isOpen={jobOrderDisclosure.isOpen}
          onClose={jobOrderDisclosure.onClose}
        >
          <JobOrderImageModal onClose={jobOrderDisclosure.onClose} id={id} />
        </CustomModal>
      </Box>
    );
  }
}
