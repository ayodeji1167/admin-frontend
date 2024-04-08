import React from 'react';
import GridItem from '@/components/ui/chakra/GridItem';
import Box from '@/components/ui/chakra/Box';
import Flex from '@/components/ui/chakra/Flex';
import Text from '@/components/ui/chakra/Text';
import Button from '@/components/ui/chakra/Button';
import SimpleGrid from '@/components/ui/chakra/SimpleGrid';
import Divider from '@/components/ui/chakra/Divider';
import Center from '@/components/ui/chakra/Center';

function CustomerItem({ name, value }: { name: string; value: string }) {
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
export default function CustomerInformation() {
  return (
    <Box rounded={'.5rem'} bg={'white'} mt={'1.2rem'}>
      <Flex
        pt={'.85rem'}
        px={'.9rem'}
        pb={'1.2rem'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Text textStyle={'subHeading'}>Customer Information</Text>
        <Button minW={'10rem'}>Edit Customer </Button>
      </Flex>
      <Divider />
      <Box px={'.9rem'} mt={'2rem'}>
        <SimpleGrid
          rowGap={'.9rem'}
          columnGap={'1.2rem'}
          columns={2}
          mt={'2.5rem'}
          pb={'2rem'}
        >
          <GridItem h={'2.3rem'} bg={'#F8FBFF'}>
            <CustomerItem name="Customer Name" value="John Smith" />
          </GridItem>
          <GridItem bg={'#F8FBFF'}>
            <CustomerItem name="Date of Birth" value="January 1, 1980" />
          </GridItem>
          <GridItem h={'2.3rem'} bg={'#EBEBEB'}>
            <CustomerItem name="Email" value="john.smith@example.com" />
          </GridItem>
          <GridItem h={'2.3rem'} bg={'#EBEBEB'}>
            <CustomerItem name="Phone Number" value="+1 (555) 123-4567" />
          </GridItem>
          <GridItem h={'2.3rem'} bg={'#F8FBFF'}>
            <CustomerItem name="Total Services" value="10" />
          </GridItem>
          <GridItem h={'2.3rem'} bg={'#F8FBFF'}>
            <CustomerItem
              name="Address"
              value="123 Main Street, Anytown, USA"
            />
          </GridItem>
        </SimpleGrid>
      </Box>
      <Box px={'.9rem'} mt={'2rem'}>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Text fontSize={'1.2rem'} fontWeight={500} fontFamily={'heading'}>
            Vehicle owned by customer
          </Text>
          <Button minW={'11rem'}>Add new Vehicle</Button>
        </Flex>
        <SimpleGrid
          rowGap={'.9rem'}
          columnGap={'1.2rem'}
          columns={2}
          mt={'1rem'}
          pb={'2rem'}
        >
          <GridItem display={'flex'} flexDirection={'column'} gap={'.9rem'}>
            <Box h={'2.3rem'} bg={'#F8FBFF'}>
              <CustomerItem name="Vehicle Model" value="Toyota Corolla" />
            </Box>
            <Box h={'2.3rem'} bg={'#EBEBEB'}>
              <CustomerItem name="Name" value="Black rang rover" />
            </Box>
            <Box h={'2.3rem'} bg={'#F8FBFF'}>
              <CustomerItem name="VIN" value="JSER682083768H21" />
            </Box>
            <Box h={'2.3rem'} bg={'#EBEBEB'}>
              <CustomerItem name="Last Service Date" value="March 10, 2024" />
            </Box>
            <Box h={'2.3rem'} bg={'#F8FBFF'}>
              <CustomerItem name="Next Service Date" value="June 10, 2024" />
            </Box>
            <Center
              color={'#2574C3'}
              fontWeight={700}
              h={'2.7rem'}
              rounded={'1.2rem'}
              w={'10rem'}
              bg={'#ECF3F9'}
              justifySelf={'flex-end'}
              ml={'auto'}
            >
              View vehicle info
            </Center>
          </GridItem>
          <GridItem display={'flex'} flexDirection={'column'} gap={'.9rem'}>
            <Box h={'2.3rem'} bg={'#F8FBFF'}>
              <CustomerItem name="Vehicle Model" value="Toyota Corolla" />
            </Box>
            <Box h={'2.3rem'} bg={'#EBEBEB'}>
              <CustomerItem name="Name" value="Black rang rover" />
            </Box>
            <Box h={'2.3rem'} bg={'#F8FBFF'}>
              <CustomerItem name="VIN" value="JSER682083768H21" />
            </Box>
            <Box h={'2.3rem'} bg={'#EBEBEB'}>
              <CustomerItem name="Last Service Date" value="March 10, 2024" />
            </Box>
            <Box h={'2.3rem'} bg={'#F8FBFF'}>
              <CustomerItem name="Next Service Date" value="June 10, 2024" />
            </Box>
            <Center
              color={'#2574C3'}
              fontWeight={700}
              h={'2.7rem'}
              rounded={'1.2rem'}
              w={'10rem'}
              bg={'#ECF3F9'}
              justifySelf={'flex-end'}
              ml={'auto'}
            >
              View vehicle info
            </Center>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
