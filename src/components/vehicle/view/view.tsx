import SizeWrapper from '@/components/sizewrapper/SizeWrapper';
import React from 'react';
import Head from './head';
import Details from './details';
import ServiceLogs from '@/components/common/service-logs/service-logs';

export default function Vehicleview({ id }: { id: string }) {
  return (
    <div>
      <SizeWrapper>
        <Head id={id} />
        <Details id={id} />
        <ServiceLogs />
      </SizeWrapper>
    </div>
  );
}
