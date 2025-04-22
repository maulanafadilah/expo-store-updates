import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoStoreUpdatesViewProps } from './ExpoStoreUpdates.types';

const NativeView: React.ComponentType<ExpoStoreUpdatesViewProps> =
  requireNativeView('ExpoStoreUpdates');

export default function ExpoStoreUpdatesView(props: ExpoStoreUpdatesViewProps) {
  return <NativeView {...props} />;
}
