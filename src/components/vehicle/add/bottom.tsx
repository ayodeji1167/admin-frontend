'use client';
import { useGetAllBusiness } from '@/app/api/business/get-all-business';
import { useAddVehicle } from '@/app/api/vehicles/add-vehicle';
import CustomSelect from '@/components/Input/CustomSelect';
import StringInput from '@/components/Input/StringInput';
import { cars } from '@/data/cars';
import {
  carTypeOptions,
  fuelTypeOptions,
  yearOptions,
} from '@/data/vehicle-options';
import { useToast } from '@/hooks/useToast';
import { IUser } from '@/interface/user';
import { IVehicle } from '@/interface/vehicle';
import { getCarModelOptions, getCarOptions } from '@/utils/select-format';
import {
  Box,
  Button,
  Center,
  Divider,
  GridItem,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useEffect, useState } from 'react';

export default function Bottom({
  initialValues,
}: {
  initialValues?: Partial<IVehicle>;
}) {
  const toast = useToast();
  const make = getCarOptions(cars) || [];
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModels, setSelectedModels] = useState<any>([]);
  const { mutateAsync, isPending } = useAddVehicle();
  const { data } = useGetAllBusiness();
  const router = useRouter();
  const businessOptions = data?.data?.businesses.map((item: any) => ({
    label: item?.slug,
    value: item?._id,
  }));

  useEffect(() => {
    if (selectedMake) {
      const aCar = cars?.find((car) => car?.carName === selectedMake);
      setSelectedModels(getCarModelOptions(aCar?.carModels));
    }
  }, [selectedMake]);
  const vehicleInitialValues: Partial<IVehicle & IUser> = {
    firstName: initialValues?.user?.firstName ?? '',
    lastName: initialValues?.user?.lastName ?? '',
    email: initialValues?.user?.email ?? '',
    phoneNumber: initialValues?.user?.phoneNumber ?? '',
    address: initialValues?.user?.address ?? '',
    business: initialValues?.business?._id ?? '',
    vin: initialValues?.vin ?? '',
    name: initialValues?.name ?? '',
    make: initialValues?.make ?? '',
    model: initialValues?.model ?? '',
    color: initialValues?.color ?? '',
    type: initialValues?.type ?? '',
    status: initialValues?.status ?? '',
    registrationNumber: initialValues?.registrationNumber ?? '',
    ownershipType: initialValues?.ownershipType ?? '',
    year: initialValues?.year ?? '',
    // mileage: initialValues?.mileage ?? '',
    fuelType: initialValues?.fuelType ?? '',
    lastServiceDate: initialValues?.lastServiceDate ?? '',
    lastRepairDate: initialValues?.lastRepairDate ?? '',
  };

  const {
    values,
    handleSubmit,
    errors,
    handleChange,
    touched,
    handleBlur,
    setFieldValue,
  } = useFormik({
    initialValues: vehicleInitialValues,
    // validationSchema: userFormSchema,
    onSubmit: async (values) => {
      const {
        firstName,
        lastName,
        phoneNumber,
        address,
        email,
        ...vehicleDetails
      } = values;
      if (!values.ownershipType) {
        toast({ description: 'Please select ownership type', status: 'error' });
        return;
      }
      if (values.ownershipType === 'individual') {
        const res = await mutateAsync({
          firstName,
          lastName,
          email,
          phoneNumber,
          address,
          ...vehicleDetails,
        });
        // console.log('Response s', res.data);
        router.push(`/vehicles/${res.data._id}`);
        return;
      }
      if (values.ownershipType === 'business') {
        const res = await mutateAsync(vehicleDetails);
        // console.log('Response s', res.data);
        router.push(`/vehicles/${res.data._id}`);

        return;
      }
    },
  });

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit();
  };
  return (
    <Box
      rounded={'.8rem'}
      mt={'1.5rem'}
      bg={'white'}
      pt={'1.5rem'}
      pb={'3rem'}
      mb={'2rem'}
    >
      <Text
        mb={'.7rem'}
        fontFamily={'body'}
        pl={'2.5rem'}
        textStyle={'subHeading'}
        fontWeight={500}
      >
        Vehicle Information
      </Text>
      <Divider />
      <Box pb={'2rem'} px={'2.5rem'} mt={'1.5rem'}>
        <form onSubmit={handleFormSubmit}>
          <SimpleGrid gap={'1.2rem'} columns={{ base: 1, md: 2 }}>
            <GridItem>
              <CustomSelect
                placeholder="Select business"
                options={[
                  { label: 'Individual', value: 'individual' },
                  { label: 'Corporate', value: 'business' },
                ]}
                onChange={(val) => {
                  setFieldValue('ownershipType', val.value);
                }}
                label="Ownership"
              />
            </GridItem>
            <GridItem>
              <StringInput
                errorMessage={errors.vin}
                touched={touched.vin}
                inputProps={{
                  name: 'vin',
                  type: 'text',
                  placeholder: 'Enter the Vehicle VIN',
                  onChange: handleChange,
                  value: values.vin,
                  isInvalid: Boolean(errors.vin && touched.vin),
                  onBlur: handleBlur,
                }}
                formControlProps={{
                  label: 'VIN (Vehicle Identification Number)',
                }}
              />
            </GridItem>

            <GridItem>
              <CustomSelect
                placeholder="Type to search..."
                options={make}
                onChange={(val) => {
                  // console.log('value is value ', val);
                  setFieldValue('make', val.value);
                  setSelectedMake(val.value);
                }}
                // value={values.make}
                label="Make"
              />
            </GridItem>
            <GridItem>
              <CustomSelect
                placeholder="Type to search..."
                options={selectedModels}
                onChange={(val) => {
                  setFieldValue('model', val.value);
                }}
                label="Model"
              />
            </GridItem>
            {/* <GridItem>
              <StringInput
                formControlProps={{
                  label: 'Name',
                }}
                errorMessage={errors.name}
                touched={touched.name}
                inputProps={{
                  name: 'name',
                  type: 'text',
                  onChange: handleChange,
                  value: values.name,
                  isInvalid: Boolean(errors.name && touched.name),
                  onBlur: handleBlur,
                  placeholder: 'Enter the Vehicle name',
                }}
              />
            </GridItem> */}

            {values.ownershipType === 'business' && (
              <GridItem>
                <CustomSelect
                  placeholder="Select business"
                  options={businessOptions}
                  onChange={(val) => {
                    setFieldValue('business', val.value);
                  }}
                  label="Business"
                />
              </GridItem>
            )}
            <GridItem>
              <CustomSelect
                placeholder="Type to search..."
                options={yearOptions}
                onChange={(val) => {
                  setFieldValue('year', val.value);
                }}
                label="Year"
              />
            </GridItem>
            <GridItem>
              <CustomSelect
                placeholder="Type to search..."
                options={carTypeOptions}
                onChange={(val) => {
                  setFieldValue('type', val.value);
                }}
                label="Vehicle Type"
              />
            </GridItem>
            <GridItem>
              <CustomSelect
                placeholder="Type to search..."
                options={fuelTypeOptions}
                onChange={(val) => {
                  setFieldValue('fuelType', val.value);
                }}
                label="Fuel Type"
              />
            </GridItem>
            <GridItem>
              <StringInput
                formControlProps={{
                  label: 'Color',
                }}
                errorMessage={errors.color}
                inputProps={{
                  placeholder: 'Enter the Vehicle name',
                  name: 'color',
                  type: 'text',
                  onChange: handleChange,
                  value: values.color,
                  isInvalid: Boolean(errors.color && touched.color),
                  onBlur: handleBlur,
                }}
              />
            </GridItem>
            <GridItem>
              <StringInput
                formControlProps={{
                  label: 'Registration number',
                  isRequired: true,
                }}
                errorMessage={errors.color}
                inputProps={{
                  placeholder: 'Enter the Vehicle Plate number',
                  name: 'registrationNumber',
                  type: 'text',
                  onChange: handleChange,
                  value: values.registrationNumber,
                  isInvalid: Boolean(
                    errors.registrationNumber && touched.registrationNumber
                  ),
                  onBlur: handleBlur,
                }}
              />
            </GridItem>
          </SimpleGrid>
          {values.ownershipType === 'individual' && (
            <Box mt={'3.5rem'}>
              <Text
                mb={'.7rem'}
                fontFamily={'body'}
                textStyle={'subHeading'}
                fontWeight={500}
              >
                User Information
              </Text>
              <Divider />
              <SimpleGrid
                mt={'1.5rem'}
                gap={'1.2rem'}
                columns={{ base: 1, md: 2 }}
              >
                <GridItem>
                  <StringInput
                    errorMessage={errors.firstName}
                    touched={touched.firstName}
                    inputProps={{
                      name: 'firstName',
                      type: 'text',
                      placeholder: 'Enter customer first name',
                      onChange: handleChange,
                      value: values.firstName,
                      isInvalid: Boolean(errors.firstName && touched.firstName),
                      onBlur: handleBlur,
                    }}
                    formControlProps={{ isRequired: true, label: 'First Name' }}
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
                      value: values.lastName,
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
            </Box>
          )}
          <Center mt={'3rem'} mb={'3rem'}>
            <Button isLoading={isPending} type="submit" minW={'10rem'}>
              Proceed
            </Button>
          </Center>
        </form>
      </Box>
    </Box>
  );
}
