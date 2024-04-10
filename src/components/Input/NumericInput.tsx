/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  FormControl,
  FormControlProps,
  FormLabel,
  FormLabelProps,
  Input,
  InputProps,
  Text,
} from '@chakra-ui/react';
import { NumericFormat } from 'react-number-format';

type NumericInputProps = {
  formControlProps?: FormControlProps;
  formLabelProps?: FormLabelProps;
  inputProps?: InputProps;
  errorMessage?: string | undefined;
  warningMessage?: string | undefined;
  touched?: boolean | undefined;
  onValueChange: any;
};
export default function NumericInput(props: NumericInputProps) {
  return (
    <FormControl {...props.formControlProps}>
      <FormLabel
        requiredIndicator={<abbr title="required field"></abbr>}
        fontFamily={'body'}
        fontWeight={'600'}
        fontSize={'1.1rem'}
        {...props.formLabelProps}
        mb={{ base: '6px', md: '0.5rem' }}
      >
        {props.formControlProps?.label}
      </FormLabel>
      {/* <Input
        _placeholder={{ color: '#898A8C' }}
        {...props.inputProps}
        errorBorderColor="crimson"
        h={'3rem'}
        rounded={'1.2rem'}
        border="1px solid #636D79"
      /> */}
      <NumericFormat
        thousandSeparator=","
        prefix="₦"
        onValueChange={props.onValueChange}
        // @ts-ignore
        value={props.inputProps?.value as number}
        customInput={Input}
        _placeholder={{ color: '#898A8C' }}
        {...props.inputProps}
        errorBorderColor="crimson"
        h={'3rem'}
        rounded={'1.2rem'}
        border="1px solid #636D79"
      />
      {props?.errorMessage && props?.touched && (
        <Text fontSize={'12px'} color={'red'}>
          {props.errorMessage}
        </Text>
      )}
      {props?.warningMessage && (
        <Text fontSize={'12px'} color={'primary.800'}>
          {props.warningMessage}
        </Text>
      )}
    </FormControl>
  );
}
