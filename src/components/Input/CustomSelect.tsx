'use client';
import React from 'react';
import Select from 'react-select';
import { Text, useBreakpointValue } from '@chakra-ui/react';

interface CustomSelectProps {
  options: Array<any>;
  value?: any;
  onChange: (value: any) => void;
  placeholder?: string;
  label?: string;
  isDisabled?: boolean;
  selectedOption?: any;
  setSelectedOption?: any;
  defaultValue?: any;
}

export default function CustomSelect({
  options,
  onChange,
  placeholder,
  isDisabled,
  label,
  selectedOption,
  defaultValue,
}: CustomSelectProps) {
  // const [selectedValue, setSelectedValue] = useState(value);
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const handleSelectChange = (selectedOption: any) => {
    // setSelectedValue(selectedOption);
    onChange(selectedOption); // Pass value to parent component
  };

  return (
    <div>
      <Text
        fontFamily={'body'}
        fontWeight={{ base: '500', md: 600 }}
        fontSize={{ base: '.8rem', md: '1.1rem' }}
        mb={{ base: '6px', md: '0.5rem' }}
      >
        {label}
      </Text>
      <Select
        id="select-custom"
        value={selectedOption}
        defaultValue={defaultValue}
        onChange={handleSelectChange}
        options={options}
        placeholder={placeholder || 'Select an option'}
        isDisabled={isDisabled || false}
        styles={{
          control: (base) => ({
            ...base,
            width: '100%',
            height: `${isDesktop ? '3rem' : '2.5rem'}`,
            borderRadius: `${isDesktop ? '1.2rem' : '.9rem'}`,
            fontSize: `${isDesktop ? '1rem' : '.8rem'}`,
            border: '1px solid #636D79',
          }),
        }}
      />
    </div>
  );
}
