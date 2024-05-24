'use client';
import CustomSelect from '@/components/Input/CustomSelect';
import CustomTextArea from '@/components/Input/CustomTextArea';
import StringInput from '@/components/Input/StringInput';
import { statusOptions } from '@/data/options/status';
import { ServiceTypeEnum } from '@/enum/service';
import { useAddService } from '@/hooks/service/useAddService';
import { IService } from '@/interface/service';
import { mapEnumToArray } from '@/utils/options-helper';
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  GridItem,
  SimpleGrid,
  Switch,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export default function LogServiceModal({
  id,
  initialValues,
  onClose,
}: {
  id?: string;
  initialValues?: Partial<IService>;
  onClose?: any;
}) {
  const {
    values,
    handleBlur,
    setFieldValue,
    isPending,
    touched,
    errors,
    handleChange,
    handleFormSubmit,
  } = useAddService({ id, initialValues, onClose });
  return (
    <Box pb={'2rem'}>
      <Text
        mb={{ base: '.8rem', md: '1.2rem' }}
        fontWeight={700}
        fontFamily={'heading'}
        fontSize={{ base: '1rem', md: '1.8rem' }}
      >
        Add New Service for Vehicle
      </Text>
      <Text
        mb={'2rem'}
        fontSize={{ base: '.8rem', md: '1rem' }}
        color={'#5D5E5F'}
      >
        Please fill out the following form to log a new service appointment for
        the selected vehicle
      </Text>

      <form onSubmit={handleFormSubmit}>
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
            <StringInput
              errorMessage={errors.branch}
              touched={touched.branch}
              inputProps={{
                name: 'branch',
                type: 'text',
                placeholder: 'Surulere',
                onChange: handleChange,
                value: values.branch,
                isInvalid: Boolean(errors.branch && touched.branch),
                onBlur: handleBlur,
              }}
              formControlProps={{
                label: 'Branch',
              }}
            />
          </GridItem>

          <GridItem>
            <CustomSelect
              placeholder="Type  search..."
              options={mapEnumToArray(ServiceTypeEnum)}
              // onCreateOption={(e) => {
              //   console.log('e is ', e);
              // }}
              onChange={(val) => {
                // console.log('VALUE IS ', val);

                setFieldValue('type', val.value);
                // console.log('value is value ', val);
                // return val;
              }}
              label="Service Type"
            />
          </GridItem>
          {/* <GridItem> */}
          <FormControl mb=".7rem" display="flex" alignItems="flex-end">
            <FormLabel
              fontFamily={'body'}
              fontWeight={'600'}
              fontSize={{ base: '.8rem', md: '.9rem' }}
              htmlFor="email-alerts"
              mb={'0'}
            >
              Use current time as time in?
            </FormLabel>
            <Switch
              onChange={(e) => {
                // console.log('i have schanged', e.target.checked);
                setFieldValue('useDefaultTimeIn', e.target.checked);

                // setUseDefaultTimeIn((prev) => !prev);
              }}
              size={{ base: 'sm', md: 'lg' }}
              id="email-alerts"
              isChecked={values.useDefaultTimeIn}
            />
          </FormControl>
          {/* </GridItem> */}
          {!values.useDefaultTimeIn && (
            <GridItem>
              <StringInput
                errorMessage={errors.timeIn as any}
                touched={touched.timeIn as any}
                inputProps={{
                  name: 'timeIn',
                  type: 'datetime-local',
                  placeholder: 'Time In',
                  onChange: handleChange,
                  value: values.timeIn,
                  isInvalid: Boolean(errors.timeIn && touched.timeIn),
                  onBlur: handleBlur,
                }}
                formControlProps={{
                  label: 'Time In',
                }}
              />
            </GridItem>
          )}
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
        </SimpleGrid>

        <GridItem mt={'1rem'} colSpan={6}>
          <CustomTextArea
            formControlProps={{
              label: 'Comment',
            }}
            inputProps={{ name: 'note', onChange: handleChange }}
          />
        </GridItem>

        <Center mt={'4rem'}>
          <Button isLoading={isPending} type="submit" minW={'11rem'}>
            Save
          </Button>
        </Center>
      </form>
    </Box>
  );
}
