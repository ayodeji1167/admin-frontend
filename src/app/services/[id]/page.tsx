import ViewbyId from '@/components/services/view-by-id/view-by-id';
import React from 'react';

export default function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <ViewbyId id={params.id} />
    </div>
  );
}
