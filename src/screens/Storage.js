import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useCallback, useEffect, useState } from "react";

export const StorageScreen = () => {
  const [value, setValue] = useState(null);

  const onSave = async () => {
    try {
      await AsyncStorage.setItem("TEST_KEY", "test");
    } catch (e) {
      // nie zapisalo sie. Ogarnij temat
    }
  };

  const onLoad = useCallback(async () => {
    try {
      const response = await AsyncStorage.getItem("TEST_KEY");
      setValue(response);
    } catch (error) {
      // problem z ladowaniem. obsluz blad
    }
  }, []);

  useEffect(() => {
    onLoad();
  }, [onLoad]);


  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text>Value: {value}</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={onLoad}>
          <AntDesign name="download" size={48} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onSave}>
          <AntDesign name="upload" size={48} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 32,
  },
  row: {
    flexDirection: "row",
    gap: 16,
  },
});
