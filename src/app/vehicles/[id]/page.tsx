import Vehicleview from '@/components/vehicle/view/view';
import React from 'react';

export default function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <Vehicleview id={params.id} />
    </div>
  );
}
