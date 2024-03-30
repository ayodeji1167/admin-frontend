export const yearOptions = Array.from({ length: 35 }).map((_, index) => ({
  label: String(2024 - index),
  value: String(2024 - index),
}));

export const carTypeOptions = [
  { label: 'Truck', value: 'truck' },
  { label: 'Car', value: 'car' },
  { label: 'Bus', value: 'bus' },
];
export const fuelTypeOptions = [
  { label: 'Petrol', value: 'petrol' },
  { label: 'Diesel', value: 'diesel' },
  { label: 'Hybrid', value: 'hybrid' },
];
