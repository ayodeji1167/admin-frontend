'use client';
import React, { useState } from 'react';
import Select from 'react-select';
import { Text } from '@chakra-ui/react';

interface CustomSelectProps {
  options: Array<any>;
  value?: any;
  onChange: (value: any) => void;
  placeholder?: string;
  label?: string;
  isDisabled?: boolean;
}

export default function CustomSelect({
  options,
  value,
  onChange,
  placeholder,
  isDisabled,
  label,
}: CustomSelectProps) {
  const [selectedValue, setSelectedValue] = useState(value);

  const handleSelectChange = (selectedOption: any) => {
    setSelectedValue(selectedOption);
    onChange(selectedOption.value); // Pass value to parent component
  };
  return (
    <div>
      <Text
        fontFamily={'body'}
        fontWeight={'600'}
        fontSize={'1.1rem'}
        mb={{ base: '6px', md: '0.5rem' }}
      >
        {label}
      </Text>
      <Select
        id="select-custom"
        value={selectedValue}
        onChange={handleSelectChange}
        options={options}
        placeholder={placeholder || 'Select an option'}
        isDisabled={isDisabled || false}
        styles={{
          control: (base) => ({
            ...base,
            width: '100%',
            height: '3rem',
            borderRadius: '1.2rem',
            border: '1px solid #636D79',
          }),
        }}
      />
    </div>
  );
}
