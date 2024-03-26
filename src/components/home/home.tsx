import React from 'react';
import SizeWrapper from '../sizewrapper/SizeWrapper';
import Top from './Top';
import Bottom from './bottom';

export default function Home() {
  return (
    <div>
      <SizeWrapper>
        <Top />
        <Bottom />
      </SizeWrapper>
    </div>
  );
}
