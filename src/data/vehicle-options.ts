export const yearOptions = Array.from({ length: 35 }).map((_, index) => ({
  label: String(2024 - index),
  value: String(2024 - index),
}));

export const carTypeOptions = [
  { label: 'Truck', value: 'TRUCK' },
  { label: 'Car', value: 'CAR' },
  { label: 'Bus', value: 'BUS' },
  { label: 'Lorry', value: 'LORRY' },
  { label: 'Pickup', value: 'PICKUP' },
];
export const fuelTypeOptions = [
  { label: 'Petrol', value: 'PETROL' },
  { label: 'Diesel', value: 'DIESEL' },
  { label: 'Gas', value: 'GAS' },
  { label: 'Electric', value: 'ELECTRIC' },
];
