'use client';

import { SliceZone } from '@prismicio/react';
import { SliceSimulator } from '@slicemachine/adapter-next/simulator';

import { components } from '../../slices';

export default function SliceSimulatorPage() {
  return (
    <SliceSimulator
      background='#121b2f'
      sliceZone={props => <SliceZone {...props} components={components} />}
    />
  );
}
