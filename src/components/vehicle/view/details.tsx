'use client';
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  GridItem,
  Image,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

import Link from 'next/link';
import { useGetVehiclebyId } from '@/app/api/vehicles/get-vehicle-by-id';
import LottieLoader from '@/components/Loader/LottieLoader';
import CustomModal from '@/components/common/Modals/CustomModal';
// import AddUserModal from './add-user-modal';
import Userform from '@/components/userform/userform';
import { useAddUser } from '@/app/api/vehicles/add-user';
import UploadImages from './upload-images';
import { useUpdateVehicle } from '@/app/api/vehicles/update-vehicle';

function VehicleItem({
  name,
  value,
}: {
  name: string;
  value?: string | undefined;
}) {
  return (
    <Flex
      pl={{ base: '1rem', md: '1.2rem' }}
      h={'2.3rem'}
      alignItems={'center'}
      gap={'.3rem'}
    >
      <Text fontSize={{ base: '.8rem', md: '1rem' }}>{name}:</Text>
      <Text
        fontSize={{ base: '.8rem', md: '1rem' }}
        textTransform={'uppercase'}
        fontWeight={600}
      >
        {value ? value : 'NULL'}
      </Text>
    </Flex>
  );
}
export default function Details({ id }: { id: string }) {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const { data, isLoading, refetch } = useGetVehiclebyId(id);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const adImagesDisclosure = useDisclosure();
  const editUserDisclosure = useDisclosure();
  const { mutateAsync, isPending } = useAddUser();
  const {
    mutateAsync: editVehicleMutateAsync,
    isPending: editVehicleIspending,
  } = useUpdateVehicle();

  function getLastFourItems<T>(array: T[] | any): T[] {
    return array?.slice(Math.max(array?.length - 4, 0));
  }
  const images = getLastFourItems<any>(
    data?.data?.images?.map((item) => item.url)
  );
  const ownerName =
    data?.data?.ownershipType === 'individual'
      ? `${data?.data?.user?.firstName} ${data?.data?.user?.lastName}`
      : `${data?.data?.business?.slug}`;
  const ownerLink =
    data?.data?.ownershipType === 'individual'
      ? `/customers/${data?.data?.user?._id}`
      : `/business/${data?.data?.business?._id}`;

  // `${data?.data?.business?.slug}` ??
  // `${data?.data?.user?.firstName} ${data?.data?.user?.lastName}`;
  const hasOwner = Boolean(data?.data?.user) || Boolean(data?.data?.business);
  const hasImages = data?.data?.images && data?.data?.images?.length > 0;
  const addUser = async (values: any) => {
    await mutateAsync({ data: values, vehicleId: id as string });
    refetch();
    onClose();
  };
  const editUser = async (values: any) => {
    await editVehicleMutateAsync({
      data: {
        user: { ...values, _id: data?.data?.user?._id },
      },
      vehicleId: id as string,
    });
    refetch();
    editUserDisclosure.onClose();
  };

  // console.log('data is ', data);

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
          px={{ base: '1rem', md: '1.8rem' }}
          pb={'1.5rem'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Text textStyle={'subHeading'}>Vehicle Details</Text>

          <Link href={`/vehicles/edit/${id}`}>
            <Button minW={{ base: '7rem', md: '11rem' }}>
              {!isDesktop ? 'Edit' : 'Edit Vehicle details'}
            </Button>
          </Link>
        </Flex>
        <Divider />
        <Box px={{ base: '1rem', md: '1.8rem' }} pt={'1.8rem'}>
          {hasImages && (
            <Button
              mb={'1rem'}
              onClick={adImagesDisclosure.onOpen}
              fontSize={{ base: '.8rem', md: '1.2rem' }}
              variant={'ghost'}
            >
              Add More images
            </Button>
          )}
          {hasImages ? (
            <SimpleGrid gap={'1.6rem'} columns={{ base: 2, md: 4 }}>
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
              <Text
                fontWeight={'500'}
                fontSize={{ base: '.8rem', md: '1.2rem' }}
                fontStyle={'italic'}
              >
                Oops! This device has no image
              </Text>
              <Button
                onClick={adImagesDisclosure.onOpen}
                fontSize={{ base: '.8rem', md: '1.2rem' }}
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
              <VehicleItem name="VIN" value={data?.data?.vin} />
            </GridItem>
            <GridItem bg={'#F8FBFF'}>
              <VehicleItem name="Vehicle Model" value={data?.data.model} />
            </GridItem>
            <GridItem h={'2.3rem'} bg={'#EBEBEB'}>
              <VehicleItem name="Year" value={data?.data.year} />
            </GridItem>
            <GridItem bg={'#EBEBEB'}>
              <VehicleItem name="Vehicle Make" value={data?.data.make} />
            </GridItem>
            {hasOwner && (
              <GridItem h={'2.3rem'} bg={'#F8FBFF'}>
                <VehicleItem name="Owner" value={ownerName} />
              </GridItem>
            )}
            <GridItem bg={'#F8FBFF'}>
              <VehicleItem
                name="Registration Number"
                value={data?.data.registrationNumber}
              />
            </GridItem>
            <GridItem h={'2.3rem'} bg={'#EBEBEB'}>
              <VehicleItem
                name="Ownership Type"
                value={data?.data.ownershipType}
              />
            </GridItem>
            <GridItem bg={'#EBEBEB'}>
              <VehicleItem name="Fuel Type Make" value={data?.data.fuelType} />
            </GridItem>
          </SimpleGrid>

          {hasOwner ? (
            <Center
              flexDir={{ base: 'column', md: 'row' }}
              mt={{ base: '0rem', md: '2rem' }}
              gap={'1.3rem'}
            >
              <Text fontWeight={700} fontSize={{ base: '.8rem', md: '1.2rem' }}>
                This vehicle is owned by{' '}
                <Link
                  href={ownerLink}
                  style={{ color: '#2574C3', marginLeft: '10px' }}
                >
                  {ownerName}.
                </Link>{' '}
              </Text>
              {data?.data?.ownershipType === 'individual' && (
                <Button onClick={editUserDisclosure.onOpen} minW={'13rem'}>
                  Edit Owners information
                </Button>
              )}
            </Center>
          ) : (
            <Center mt={'2rem'} gap={'2.3rem'}>
              <Text fontWeight={700} fontSize={'1.2rem'}>
                This vehicle has no user
              </Text>
              <Button minW={'10rem'} onClick={onOpen}>
                Add user
              </Button>
            </Center>
          )}
        </Box>

        <CustomModal isOpen={isOpen} onClose={onClose}>
          <Userform isLoading={isPending} handleApiSubmit={addUser} />
        </CustomModal>

        <CustomModal
          isOpen={editUserDisclosure.isOpen}
          onClose={editUserDisclosure.onClose}
        >
          <Userform
            isLoading={editVehicleIspending}
            handleApiSubmit={editUser}
            initialValues={data?.data.user}
          />
        </CustomModal>

        <CustomModal
          modalContentProps={{ w: { base: '95%', md: '60rem' } }}
          isOpen={adImagesDisclosure.isOpen}
          onClose={adImagesDisclosure.onClose}
        >
          <UploadImages onClose={adImagesDisclosure.onClose} id={id} />
        </CustomModal>
      </Box>
    );
  }
}
