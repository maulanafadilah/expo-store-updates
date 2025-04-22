import { registerWebModule, NativeModule } from 'expo';

import { ExpoStoreUpdatesModuleEvents } from './ExpoStoreUpdates.types';

class ExpoStoreUpdatesModule extends NativeModule<ExpoStoreUpdatesModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoStoreUpdatesModule);
