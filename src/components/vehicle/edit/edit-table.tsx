'use client';
import SizeWrapper from '@/components/sizewrapper/SizeWrapper';
import { Box } from '@chakra-ui/react';
import React from 'react';
import Head from './head';
import Bottom from '../add/bottom';

export default function EditVehicle({ id }: { id: string }) {
  // const { data, isLoading } = useGetVehiclebyId(id);

  // const handleEditUser = () => {};
  // const vehicleInitialValues: Partial<IVehicle> = {
  //   vin: data?.data?.vin ? data?.data?.vin : '',
  //   name: data?.data?.name ? data?.data?.name : '',
  //   make: data?.data?.make ? data?.data?.make : '',
  //   model: data?.data?.model ? data?.data?.model : '',
  //   color: data?.data?.color ? data?.data?.color : '',
  //   type: data?.data?.type ? data?.data?.type : '',
  //   status: data?.data?.status ? data?.data?.status : '',
  //   registrationNumber: data?.data?.registrationNumber
  //     ? data?.data?.registrationNumber
  //     : '',
  //   ownershipType: data?.data?.ownershipType ? data?.data?.ownershipType : '',
  //   year: data?.data?.year ? data?.data?.year : '',
  //   mileage: data?.data?.mileage ? data?.data?.mileage : 0,
  //   fuelType: data?.data?.fuelType ? data?.data?.fuelType : '',
  //   lastServiceDate: data?.data?.lastServiceDate
  //     ? data?.data?.lastServiceDate
  //     : '',
  //   lastRepairDate: data?.data?.lastRepairDate
  //     ? data?.data?.lastRepairDate
  //     : '',
  // };

  // const { values, handleSubmit, errors, handleChange, touched, handleBlur } =
  //   useFormik<Partial<IVehicle>>({
  //     initialValues: vehicleInitialValues,
  //     // validationSchema: null,
  //     onSubmit: async (values) => {
  //       return values;
  //     },
  //   });

  // const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   handleSubmit();
  // };
  return (
    <div>
      <SizeWrapper>
        <Head id={id} />
        <Box
          px={'1rem'}
          rounded={'.5rem'}
          mt={'1.2rem'}
          pt={'1rem'}
          bg={'white'}
        >
          {/* <Userform
            handleApiSubmit={handleEditUser}
            initialValues={data?.data?.user}
          /> */}
          <Box>
            <Bottom />
            {/* <Text
              mb={'.7rem'}
              fontFamily={'body'}
              textStyle={'subHeading'}
              fontWeight={500}
            >
              Vehicle Information
            </Text>
            <Divider />
            <form onSubmit={handleFormSubmit}>
              <SimpleGrid
                mt={'1.5rem'}
                gap={'1.2rem'}
                columns={{ base: 1, md: 2 }}
              >
                <GridItem>
                  <StringInput
                    errorMessage={errors.name}
                    touched={touched.name}
                    inputProps={{
                      name: 'name',
                      type: 'text',
                      placeholder: 'Enter vehicle name',
                      onChange: handleChange,
                      value: values.name,
                      isInvalid: Boolean(errors.name && touched.name),
                      onBlur: handleBlur,
                    }}
                    formControlProps={{ isRequired: true, label: 'Name' }}
                  />
                </GridItem>
                <GridItem>
                  <StringInput
                    errorMessage={errors.lastName}
                    touched={touched.lastName}
                    inputProps={{
                      name: 'lastName',
                      type: 'text',
                      placeholder: 'Enter customer last name',
                      onChange: handleChange,
                      value: initialValues?.lastName || values.lastName,
                      isInvalid: Boolean(errors.lastName && touched.lastName),
                      onBlur: handleBlur,
                    }}
                    formControlProps={{ isRequired: true, label: 'Last Name' }}
                  />
                </GridItem>
                <GridItem>
                  <StringInput
                    errorMessage={errors.email}
                    touched={touched.email}
                    inputProps={{
                      name: 'email',
                      type: 'email',
                      placeholder: 'valerie@example.com',
                      onChange: handleChange,
                      value: values.email,
                      isInvalid: Boolean(errors.email && touched.email),
                      onBlur: handleBlur,
                    }}
                    formControlProps={{
                      isRequired: true,
                      label: 'Email address',
                    }}
                  />
                </GridItem>
                <GridItem>
                  <StringInput
                    errorMessage={errors.phoneNumber}
                    touched={touched.phoneNumber}
                    inputProps={{
                      name: 'phoneNumber',
                      type: 'text',
                      placeholder: 'Enter customer Phone number',
                      onChange: handleChange,
                      value: values.phoneNumber,
                      isInvalid: Boolean(
                        errors.phoneNumber && touched.phoneNumber
                      ),
                      onBlur: handleBlur,
                    }}
                    formControlProps={{
                      isRequired: true,
                      label: 'Phone Number',
                    }}
                  />
                </GridItem>
                <GridItem>
                  <StringInput
                    errorMessage={errors.address}
                    touched={touched.address}
                    inputProps={{
                      name: 'address',
                      type: 'text',
                      placeholder: 'Enter customer Address',
                      onChange: handleChange,
                      value: values.address,
                      isInvalid: Boolean(errors.address && touched.address),
                      onBlur: handleBlur,
                    }}
                    formControlProps={{ isRequired: true, label: 'Address' }}
                  />
                </GridItem>
              </SimpleGrid>
              <Center mt={'2rem'} mb={'3rem'}>
                <Button isLoading={isLoading} type="submit" minW={'9rem'}>
                  Proceed
                </Button>
              </Center>
            </form> */}
          </Box>
        </Box>
      </SizeWrapper>
    </div>
  );
}
