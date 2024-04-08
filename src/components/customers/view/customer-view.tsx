import SizeWrapper from '@/components/sizewrapper/SizeWrapper';
import React from 'react';
import Head from './head';
import CustomerInformation from './customer-information';
import ServiceLogs from '@/components/common/service-logs/service-logs';

export default function CustomerView({ id }: { id: string }) {
  return (
    <SizeWrapper>
      <Head id={id} />
      <CustomerInformation />
      <ServiceLogs />
    </SizeWrapper>
  );
}
