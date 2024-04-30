import AddInvoice from '@/components/invoices/add/add-invoice';
import React from 'react';

export default function page({ params }: { params: { serviceId: string } }) {
  return (
    <div>
      <AddInvoice serviceId={params.serviceId} />
    </div>
  );
}
