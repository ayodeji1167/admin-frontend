import React from 'react';
import SizeWrapper from '../sizewrapper/SizeWrapper';
import Top from './top';
import Bottom from './bottom';

export default function Customers() {
  return (
    <SizeWrapper>
      <Top />
      <Bottom />
    </SizeWrapper>
  );
}
