import EditInvoice from '@/components/invoices/edit/edit-invoice';
import React from 'react';

export default function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <EditInvoice id={params.id} />
    </div>
  );
}
