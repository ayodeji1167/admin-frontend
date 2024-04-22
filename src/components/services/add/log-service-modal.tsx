'use client';
import CustomSelect from '@/components/Input/CustomSelect';
import CustomTextArea from '@/components/Input/CustomTextArea';
import StringInput from '@/components/Input/StringInput';
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
        mb={'1.2rem'}
        fontWeight={700}
        fontFamily={'heading'}
        fontSize={'1.8rem'}
      >
        Log New Service for Vehicle
      </Text>
      <Text mb={'2rem'} color={'#5D5E5F'}>
        Please fill out the following form to log a new service appointment for
        the selected vehicle
      </Text>

      <form onSubmit={handleFormSubmit}>
        <SimpleGrid gap={'1.2rem'} columns={2}>
          {/* <GridItem>
            <CustomSelect
              placeholder="Select business"
              options={[
                { label: 'Individual', value: 'individual' },
                { label: 'Partner', value: 'business' },
              ]}
              onChange={(val) => {
                setFieldValue('ownershipType', val.value);
              }}
              label="Ownership"
            />
          </GridItem> */}
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
              fontSize={'1.1rem'}
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
              size={'lg'}
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
