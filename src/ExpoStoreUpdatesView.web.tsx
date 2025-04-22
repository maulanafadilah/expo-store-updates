import * as React from 'react';

import { ExpoStoreUpdatesViewProps } from './ExpoStoreUpdates.types';

export default function ExpoStoreUpdatesView(props: ExpoStoreUpdatesViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
