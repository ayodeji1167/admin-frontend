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
        fontWeight={{ base: '500', md: 600 }}
        fontSize={{ base: '.8rem', md: '1.1rem' }}
        {...props.formLabelProps}
        mb={{ base: '6px', md: '0.5rem' }}
      >
        {props.formControlProps?.label}
      </FormLabel>
      <Input
        _placeholder={{ color: '#898A8C' }}
        {...props.inputProps}
        errorBorderColor="crimson"
        h={{ base: '2.5rem', md: 'fit-content' }}
        rounded={{ base: '.9rem', md: '1.2rem' }}
        border="1px solid #636D79"
        fontSize={{ base: '.8rem', md: '1rem' }}
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
