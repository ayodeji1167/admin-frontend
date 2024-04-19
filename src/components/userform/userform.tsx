'use client';

import {
  Box,
  Button,
  Center,
  Divider,
  GridItem,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React, { FormEvent } from 'react';
import StringInput from '../Input/StringInput';
import { useFormik } from 'formik';
import { IUser } from '@/interface/user';
import { userFormSchema } from '@/formhandling/validations/user';

interface UserFormProps {
  handleApiSubmit: any;
  isLoading?: boolean;
  initialValues?: Partial<IUser>;
}

export default function Userform({
  handleApiSubmit,
  isLoading,
  initialValues,
}: UserFormProps) {
  const userFormInitialValues = {
    firstName: initialValues?.firstName ? initialValues.firstName : '',
    lastName: initialValues?.lastName ? initialValues.lastName : '',
    email: initialValues?.email ? initialValues.email : '',
    phoneNumber: initialValues?.phoneNumber ? initialValues.phoneNumber : '',
    address: initialValues?.address ? initialValues.address : '',
  };

  const { values, handleSubmit, errors, handleChange, touched, handleBlur } =
    useFormik<Partial<IUser>>({
      initialValues: userFormInitialValues,
      validationSchema: userFormSchema,
      onSubmit: async (values) => {
        await handleApiSubmit(values);
      },
    });

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit();
  };
  return (
    <Box>
      <Text
        mb={'.7rem'}
        fontFamily={'body'}
        textStyle={'subHeading'}
        fontWeight={500}
      >
        User Information
      </Text>
      <Divider />
      <form onSubmit={handleFormSubmit}>
        <SimpleGrid mt={'1.5rem'} gap={'1.2rem'} columns={{ base: 1, md: 2 }}>
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
                isInvalid: Boolean(errors.phoneNumber && touched.phoneNumber),
                onBlur: handleBlur,
              }}
              formControlProps={{ isRequired: true, label: 'Phone Number' }}
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
      </form>
    </Box>
  );
}
