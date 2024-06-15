import { Button, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { routes } from "../constants/routes";

const routesValues = Object.values(routes);

export const FastTrack = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        {routesValues.map((route) => (
          <Button
            key={route}
            title={route}
            onPress={() => {
              navigation.navigate(route);
            }}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

// po pierwsze uzupelniacie fasttrack
// stworzcie nowy ekran CharacterList
// Podepnijcie ekran do navigatora
// Ekran na razie niech wyswietla Text - Characters