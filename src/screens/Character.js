import { View, Text } from "react-native";
import { useCharacterByIdGet } from "../hooks/useCharacterByIdGet";
import { LoadingScreen } from "../components/LoadingScreen";
import { ErrorScreen } from "../components/ErrorScreen";

export const CharacterScreen = ({ navigation, route }) => {
  const { params } = route;

  const { data, isError, isLoading } = useCharacterByIdGet(params?.id);

  if (!params?.id) {
    return <Text>Something Went Wrong</Text>;
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  if (data === null) {
    return <Text>No Data</Text>;
  }

  return (
    <View>
      <Text>Character {params?.id}</Text>
      <Text>{data.name}</Text>
    </View>
  );
};
