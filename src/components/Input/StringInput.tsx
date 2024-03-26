import {
  FormControl,
  FormControlProps,
  FormLabel,
  FormLabelProps,
  Input,
  InputProps,
  Text,
} from '@chakra-ui/react';

type StringInputProps = {
  formControlProps?: FormControlProps;
  formLabelProps?: FormLabelProps;
  inputProps?: InputProps;
  errorMessage?: string | undefined;
  warningMessage?: string | undefined;
  touched?: boolean | undefined;
};
export default function StringInput(props: StringInputProps) {
  return (
    <FormControl {...props.formControlProps}>
      <FormLabel
        requiredIndicator={<abbr title="required field"></abbr>}
        fontFamily={'body'}
        fontWeight={'600'}
        fontSize={'1rem'}
        {...props.formLabelProps}
        mb={{ base: '6px', md: '0.5rem' }}
      >
        {props.formControlProps?.label}
      </FormLabel>
      <Input
        _placeholder={{ color: '#424955' }}
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
