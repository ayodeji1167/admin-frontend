import EditVehicle from '@/components/vehicle/edit/edit-table';
import React from 'react';

export default function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <EditVehicle id={params.id} />
    </div>
  );
}
