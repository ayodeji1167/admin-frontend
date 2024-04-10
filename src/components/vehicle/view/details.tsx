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
import img1 from '@/assets/vehicles/img1.png';
import img2 from '@/assets/vehicles/img2.png';
import img3 from '@/assets/vehicles/img3.png';
import img4 from '@/assets/vehicles/img4.png';
import Link from 'next/link';

function VehicleItem({ name, value }: { name: string; value: string }) {
  return (
    <Flex
      pl={'1.2rem'}
      fontSize={'1.2rem'}
      h={'2.3rem'}
      alignItems={'center'}
      gap={'.3rem'}
    >
      <Text>{name}:</Text>
      <Text fontWeight={600}>{value}</Text>
    </Flex>
  );
}
export default function Details({ id }: { id: string }) {
  const images = [img1, img2, img3, img4];
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
          {images.map((item, index) => (
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
                src={item.src}
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
            <VehicleItem name="VIN" value="1HGCM82633A004352" />
          </GridItem>
          <GridItem bg={'#F8FBFF'}>
            <VehicleItem name="Vehicle Model" value="Toyota Corolla" />
          </GridItem>
          <GridItem h={'2.3rem'} bg={'#EBEBEB'}>
            <VehicleItem name="Year" value="2023" />
          </GridItem>
          <GridItem bg={'#EBEBEB'}>
            <VehicleItem name="Vehicle Make" value="Toyota" />
          </GridItem>
          <GridItem h={'2.3rem'} bg={'#F8FBFF'}>
            <VehicleItem name="VIN" value="1HGCM82633A004352" />
          </GridItem>
          <GridItem bg={'#F8FBFF'}>
            <VehicleItem name="Vehicle Model" value="Toyota Corolla" />
          </GridItem>
          <GridItem h={'2.3rem'} bg={'#EBEBEB'}>
            <VehicleItem name="Year" value="2023" />
          </GridItem>
          <GridItem bg={'#EBEBEB'}>
            <VehicleItem name="Vehicle Make" value="Toyota" />
          </GridItem>
        </SimpleGrid>

        <Center gap={'1.3rem'}>
          <Text fontWeight={700} fontSize={'1.2rem'}>
            This vehicle is owned by{' '}
            <span style={{ color: '#2574C3' }}>Mr. John Smith.</span>{' '}
          </Text>
          <Button minW={'13rem'}>Edit Owners information</Button>
        </Center>
      </Box>
    </Box>
  );
}
