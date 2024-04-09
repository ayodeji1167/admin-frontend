import React from 'react';
import SizeWrapper from '../sizewrapper/SizeWrapper';
import Top from './view/top';
import Bottom from './view/bottom';

export default function Invoices() {
  return (
    <div>
      <SizeWrapper>
        <Top />
        <Bottom />
      </SizeWrapper>
    </div>
  );
}
