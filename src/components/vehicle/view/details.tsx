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
} from '@chakra-ui/react';
import React from 'react';

import Link from 'next/link';
import { useGetVehiclebyId } from '@/app/api/vehicles/get-vehicle-by-id';
import LottieLoader from '@/components/Loader/LottieLoader';

function VehicleItem({
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
export default function Details({ id }: { id: string }) {
  const { data, isLoading } = useGetVehiclebyId(id);
  // console.log('vehicle is ', data);

  const images = data?.data?.images?.map((item) => item.url);
  const ownerName = `${data?.data?.user?.firstName} ${data?.data?.user?.lastName}`;
  const hasOwner = Boolean(data?.data?.user);
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
          <Text textStyle={'subHeading'}>Vehicle Details</Text>

          <Link href={`/vehicles/edit/${id}`}>
            <Button minW={'11rem'}>Edit Vehicle Details</Button>
          </Link>
        </Flex>
        <Divider />
        <Box px={'1.8rem'} pt={'1.8rem'}>
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
            <Center gap={'1.3rem'}>
              <Text fontWeight={700} fontSize={'1.2rem'}>
                This vehicle is owned by{' '}
                <Link
                  href={`/customers/${data?.data.user._id}`}
                  style={{ color: '#2574C3' }}
                >
                  {ownerName}.
                </Link>{' '}
              </Text>
              <Button minW={'13rem'}>Edit Owners information</Button>
            </Center>
          ) : (
            <Center gap={'2.3rem'}>
              <Text fontWeight={700} fontSize={'1.2rem'}>
                This vehicle has no user
              </Text>
              <Button minW={'13rem'}>Add user</Button>
            </Center>
          )}
        </Box>
      </Box>
    );
  }
}
