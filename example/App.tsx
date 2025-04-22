import * as StoreUpdates from "expo-store-updates";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{StoreUpdates.hello()}</Text>
    </View>
  );
}
