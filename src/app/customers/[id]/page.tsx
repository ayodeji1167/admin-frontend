import CustomerView from '@/components/customers/view/customer-view';
import React from 'react';

export default function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <CustomerView id={params.id} />
    </div>
  );
}
