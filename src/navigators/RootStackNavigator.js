import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import  SandboxScreen  from "../screens/Sandbox";
import { SandboxScreen } from "../screens/Sandbox";
import { RegisterScreen } from "../screens/RegisterScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { FastTrack } from "../screens/FastTrack";
import { CharacterList } from "../screens/CharacterList";
import { CharacterScreen } from "../screens/Character";
import { StorageScreen } from "../screens/Storage";

import { routes } from "../constants/routes";

const RootStack = createNativeStackNavigator();

export const RootStackNavigator = () => {
  const isDevelopment = process.env.NODE_ENV === "development";

  return (
    <RootStack.Navigator
      initialRouteName={isDevelopment ? routes.FAST_TRACK : routes.LOGIN}
      screenOptions={
        {
          // headerShown: false,
        }
      }
    >
      {isDevelopment && (
        <RootStack.Screen name={routes.FAST_TRACK} component={FastTrack} />
      )}
      <RootStack.Screen name={routes.SANDBOX} component={SandboxScreen} />
      <RootStack.Screen
        name={routes.REGISTER}
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen name={routes.LOGIN} component={LoginScreen} />
      <RootStack.Screen
        name={routes.CHARACTER_LIST}
        component={CharacterList}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen name={routes.CHARACTER} component={CharacterScreen} />
      <RootStack.Screen
        name={routes.STORAGE}
        component={StorageScreen}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
};
