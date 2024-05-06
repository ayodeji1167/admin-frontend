'use client';
import CustomSelect from '@/components/Input/CustomSelect';
import CustomTextArea from '@/components/Input/CustomTextArea';
import StringInput from '@/components/Input/StringInput';
import LottieLoader from '@/components/Loader/LottieLoader';
import SizeWrapper from '@/components/sizewrapper/SizeWrapper';
import { statusOptions } from '@/data/options/status';
import { ServiceTypeEnum } from '@/enum/service';
import { useEditService } from '@/hooks/service/useEditService';
import { mapEnumToArray } from '@/utils/options-helper';
import {
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Switch,
  Center,
  Button,
  Box,
  Text,
  chakra,
} from '@chakra-ui/react';
import React from 'react';

export default function EditService({ id }: { id: string }) {
  const {
    values,
    handleBlur,
    setFieldValue,
    isPending,
    touched,
    errors,
    handleChange,
    handleFormSubmit,
  } = useEditService({ serviceId: id });
  if (!values.type) {
    return <LottieLoader />;
  }

  return (
    <SizeWrapper>
      <Box mt={'3rem'} pb={'2rem'}>
        <Text
          mb={'1.2rem'}
          fontWeight={700}
          fontFamily={'heading'}
          fontSize={'1.8rem'}
        >
          Log New Service for Vehicle
        </Text>
        <Text mb={'2rem'} color={'#5D5E5F'}>
          Please fill out the following form to log a new service appointment
          for the selected vehicle
        </Text>

        <chakra.form
          rounded={'.8rem'}
          mt={'1.5rem'}
          bg={'white'}
          pt={'1.5rem'}
          pb={'3rem'}
          mb={'2rem'}
          onSubmit={handleFormSubmit}
          px={'2rem'}
        >
          <SimpleGrid gap={'1.2rem'} columns={{ base: 1, md: 2 }}>
            <GridItem>
              <StringInput
                errorMessage={errors.vehicle}
                touched={touched.vehicle}
                inputProps={{
                  name: 'vehcile',
                  type: 'text',
                  placeholder: 'Vehicle Id',
                  onChange: handleChange,
                  value: values.vehicle,
                  isInvalid: Boolean(errors.vehicle && touched.vehicle),
                  onBlur: handleBlur,
                }}
                formControlProps={{
                  label: 'Vehicle ID',
                  isDisabled: Boolean(id),
                }}
              />
            </GridItem>
            <GridItem>
              <CustomSelect
                placeholder="Type  search..."
                options={mapEnumToArray(ServiceTypeEnum)}
                onChange={(val) => {
                  setFieldValue('type', val.value);
                }}
                label="Service Type"
                defaultValue={mapEnumToArray(ServiceTypeEnum).filter(
                  (item) =>
                    item.value.toLowerCase() === values.type?.toLowerCase()
                )}
                // { label: values.type, value: values.type }}
              />
            </GridItem>
            <GridItem>
              <CustomSelect
                placeholder="Type  search..."
                options={statusOptions}
                onChange={(val) => {
                  setFieldValue('status', val.value);
                }}
                label="Status"
                defaultValue={statusOptions.filter(
                  (item) =>
                    item.value.toLowerCase() === values.status?.toLowerCase()
                )}
              />
            </GridItem>

            {/* {!values.useDefaultTimeIn && ( */}
            <GridItem>
              <StringInput
                errorMessage={errors.timeIn as any}
                touched={touched.timeIn as any}
                inputProps={{
                  name: 'timeIn',
                  type: 'datetime-local',
                  placeholder: 'Time In',
                  onChange: (e) => {
                    const newValue = new Date(e.target.value);
                    setFieldValue('timeIn', newValue);
                  },
                  value: values?.timeIn?.toISOString().slice(0, 16),
                  isInvalid: Boolean(errors.timeIn && touched.timeIn),
                  onBlur: handleBlur,
                }}
                formControlProps={{
                  label: 'Time In',
                }}
              />
            </GridItem>
            {/* )} */}

            <GridItem pt={'2.5rem'}>
              <FormControl display="flex" alignItems="flex-end">
                <FormLabel
                  fontFamily={'body'}
                  fontWeight={'600'}
                  fontSize={'1.1rem'}
                  htmlFor="email-alerts"
                  mb={'0'}
                >
                  Use current time as time out?
                </FormLabel>
                <Switch
                  onChange={(e) => {
                    // console.log('i have schanged', e.target.checked);
                    setFieldValue('useDefaultTimeOut', e.target.checked);

                    // setUseDefaultTimeIn((prev) => !prev);
                  }}
                  size={'lg'}
                  id="email-alerts"
                  isChecked={values.useDefaultTimeOut}
                />
              </FormControl>
            </GridItem>
            {!values.useDefaultTimeOut && (
              <GridItem>
                <StringInput
                  errorMessage={errors.timeOut as any}
                  touched={touched.timeOut as any}
                  inputProps={{
                    name: 'timeOut',
                    type: 'datetime-local',
                    placeholder: 'Time Out',
                    onChange: handleChange,
                    value: values.timeOut,
                    isInvalid: Boolean(errors.timeOut && touched.timeOut),
                    onBlur: handleBlur,
                  }}
                  formControlProps={{
                    label: 'Time Out',
                  }}
                />
              </GridItem>
            )}
          </SimpleGrid>

          <GridItem mt={'1rem'} colSpan={6}>
            <CustomTextArea
              formControlProps={{
                label: 'Comment',
              }}
              inputProps={{
                name: 'note',
                onChange: handleChange,
                value: values.note,
              }}
            />
          </GridItem>

          <Center mt={'4rem'}>
            <Button isLoading={isPending} type="submit" minW={'11rem'}>
              Save
            </Button>
          </Center>
        </chakra.form>
      </Box>{' '}
    </SizeWrapper>
  );
}
