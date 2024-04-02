import SizeWrapper from '@/components/sizewrapper/SizeWrapper';
import React from 'react';
import Head from './head';
import Details from './details';

export default function Vehicleview({ id }: { id: string }) {
  return (
    <div>
      <SizeWrapper>
        <Head id={id} />
        <Details id={id} />
      </SizeWrapper>
    </div>
  );
}
