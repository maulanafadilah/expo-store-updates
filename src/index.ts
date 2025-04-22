import ExpoStoreUpdatesModule from "./ExpoStoreUpdatesModule";

export function hello(): string {
  return ExpoStoreUpdatesModule.hello();
}

export async function checkAppVersion(
  bundleId: string,
  currentVersion: string
): Promise<{
  currentVersion: string;
  latestVersion: string;
  needsUpdate: boolean;
  appStoreUrl: string;
}> {
  return await ExpoStoreUpdatesModule.checkAppVersion(bundleId, currentVersion);
}
