import { checkAppVersion } from "expo-store-updates";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function App() {
  const [versionInfo, setVersionInfo] = useState<{
    currentVersion: string;
    latestVersion: string;
    needsUpdate: boolean;
    appStoreUrl: string;
  } | null>(null);
  const bundleId = "com.meetgeek.assistant"; // Replace with your actual bundle ID
  const currentVersion = "1.0.0"; // Replace with your current version

  useEffect(() => {
    async function fetchVersionInfo() {
      try {
        const info = await checkAppVersion(bundleId, currentVersion);
        setVersionInfo(info);
      } catch (error) {
        console.error("Error fetching version info:", error);
      }
    }
    fetchVersionInfo();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {versionInfo ? (
        <Text>
          Current Version: {versionInfo.currentVersion}
          {"\n"}Latest Version: {versionInfo.latestVersion}
          {"\n"}Needs Update: {versionInfo.needsUpdate ? "Yes" : "No"}
          {"\n"}App Store URL: {versionInfo.appStoreUrl}
        </Text>
      ) : (
        <Text>Loading version info...</Text>
      )}
    </View>
  );
}
