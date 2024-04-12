import {
  FormControl,
  FormControlProps,
  FormLabel,
  FormLabelProps,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
type StringInputProps = {
  formControlProps?: FormControlProps;
  formLabelProps?: FormLabelProps;
  inputProps?: InputProps;
  errorMessage?: string | undefined;
  warningMessage?: string | undefined;
  touched?: boolean | undefined;
};
export default function PasswordInput(props: StringInputProps) {
  const [show, setShow] = useState(false);
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
      <InputGroup>
        <Input
          _placeholder={{ color: '#898A8C' }}
          {...props.inputProps}
          errorBorderColor="crimson"
          h={'3rem'}
          rounded={'1.2rem'}
          border="1px solid #636D79"
          type={show ? 'text' : 'password'}
        />

        <InputRightElement
          cursor={'pointer'}
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? <IoEyeOffOutline /> : <IoEyeOutline />}
        </InputRightElement>
      </InputGroup>
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
