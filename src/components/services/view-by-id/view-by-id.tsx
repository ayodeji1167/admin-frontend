'use client';
import {
  Box,
  Button,
  Divider,
  Flex,
  GridItem,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

import Link from 'next/link';
import LottieLoader from '@/components/Loader/LottieLoader';
import CustomModal from '@/components/common/CustomModal';
import moment from 'moment';

import { useGetService } from '@/hooks/service/useGetServices';
import UploadImages from '@/components/vehicle/view/upload-images';
import PDFViewer from '@/components/common/pdf/PdfView';
import { useGenerateInvoicePdf } from '@/app/api/service/generate-invoice-pdf';

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
    hasImages,
    hasOwner,
    // ownerLink,
    images,
    addImagesDisclosure,
    ownerName,
  } = useGetService({ id });
  const { data: invoicePdfData, isLoading: invoicePdfLoading } =
    useGenerateInvoicePdf('66269270c6aa83314d003bf6');
  const pdfBuffer = invoicePdfData?.data?.data;
  // const pdfBlob = new Blob([new Uint8Array(pdfBuffer).buffer], {
  //   type: 'application/pdf',
  // });
  // const pdfUrlBuf = window.URL.createObjectURL(pdfBlob);

  // console.log('data is ', data);
  // const pdfUrl = `https://res.cloudinary.com/djn1shwej/image/upload/v1713779878/DOCUMENTS/INVOICES/gcjmh1xodm7wi0jfhlh1.pdf`;

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
          {hasImages && (
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
          )}

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
              <ServiceItem name="Vehicle Make" value={data?.data.make} />
            </GridItem>
            {hasOwner && (
              <GridItem h={'2.3rem'} bg={'#F8FBFF'}>
                <ServiceItem name="Owner" value={ownerName} />
              </GridItem>
            )}
          </SimpleGrid>
        </Box>

        <Stack spacing={'2rem'} px={'2rem'}>
          <Box>
            <PDFViewer
              buffer={pdfBuffer}
              isLoading={invoicePdfLoading}
              header="Invoice"
            />
          </Box>
          {/* <Box>
            <Text textStyle={'subHeading'}>Estimate</Text>
            <PDFViewer pdfUrl={pdfUrl} />
            <chakra.iframe
              mt={'2rem'}
              src={pdfUrl}
              style={{ width: '100%', height: '50rem' }}
              frameBorder="0"
            ></chakra.iframe>
          </Box>
          <Box>
            <Text textStyle={'subHeading'}>Inspection Report</Text>
            <PDFViewer pdfUrl={pdfUrl} />
            <chakra.iframe
              mt={'2rem'}
              src={pdfUrl}
              style={{ width: '100%', height: '50rem' }}
              frameBorder="0"
            ></chakra.iframe>
          </Box> */}
        </Stack>

        <CustomModal
          modalContentProps={{ minW: { base: '30rem', md: '60rem' } }}
          isOpen={addImagesDisclosure.isOpen}
          onClose={addImagesDisclosure.onClose}
        >
          <UploadImages onClose={addImagesDisclosure.onClose} id={id} />
        </CustomModal>
      </Box>
    );
  }
}
