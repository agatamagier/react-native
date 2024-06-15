import {
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useCharactersGet } from "../hooks/useCharactersGet";
import { routes } from "../constants/routes";
import { LoadingScreen } from "../components/LoadingScreen";
import { ErrorScreen } from "../components/ErrorScreen";

const NUM_COLUMNS = 3;

export const CharacterList = ({ navigation }) => {
  const { data, isError, isLoading } = useCharactersGet();
  const { width } = useWindowDimensions();

  const size = width / NUM_COLUMNS;

  const onPress = (id) => {
    navigation.navigate(routes.CHARACTER, {
      id,
    });
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <SafeAreaView>
      <FlatList
        numColumns={NUM_COLUMNS}
        data={data?.results ?? []}
        renderItem={({ item }) => {
          return (
            <CharacterTile
              size={size}
              onPress={() => onPress(item.id)}
              {...item}
            />
          );
        }}
        // horizontal
        keyExtractor={(character) => character.id}
        ListEmptyComponent={() => <Text>Empty List</Text>}
      />
    </SafeAreaView>
  );
};

const CharacterTile = ({ id, image, size = 150, onPress }) => {
  return (
    <TouchableOpacity key={id} activeOpacity={0.8} onPress={onPress}>
      <Image
        style={{ width: size, height: size }}
        source={{
          uri: image,
        }}
      />
    </TouchableOpacity>
  );
};

// Dodajcie nowy ekran do aplikacji - Storage
// dodajcie go do rootStacka
// Niech Wyswietla "Storage"
