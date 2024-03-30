import React from 'react';
import Top from './top';
import SizeWrapper from '@/components/sizewrapper/SizeWrapper';
import Bottom from './bottom';

export default function AddVehicle() {
  return (
    <div>
      <SizeWrapper>
        <Top />
        <Bottom />
      </SizeWrapper>
    </div>
  );
}
