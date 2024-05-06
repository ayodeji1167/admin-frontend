import EditService from '@/components/services/edit/edit';
import React from 'react';

export default function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <EditService id={params.id} />
    </div>
  );
}
