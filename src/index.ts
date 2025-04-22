// Reexport the native module. On web, it will be resolved to ExpoStoreUpdatesModule.web.ts
// and on native platforms to ExpoStoreUpdatesModule.ts
export { default } from './ExpoStoreUpdatesModule';
export { default as ExpoStoreUpdatesView } from './ExpoStoreUpdatesView';
export * from  './ExpoStoreUpdates.types';
