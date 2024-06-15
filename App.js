import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { RootStackNavigator } from "./src/navigators/RootStackNavigator";
import { ApiProvider } from "./src/providers/ApiProvider";

export default function App() {
  return (
    <ApiProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ApiProvider>
  );
}
