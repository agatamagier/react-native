import {
  View,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useCharactersGet } from "../hooks/useCharactersGet";

import { CloudRainIcon } from "../../assets/icons/CloudRainIcon";

import Icon from "../../assets/icon.png";

const Character = () => {
  useCharactersGet();
  return null;
};

export const SandboxScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.root}>
      <Character />
      <Character />
      <CloudRainIcon />
      <TouchableOpacity>
        <AntDesign name="printer" size={24} color="rgba(0,0,0,0.5)" />
      </TouchableOpacity>
      <Image source={Icon} style={styles.localImage} />
      <Image
        // style={{
        //   width: 150,
        //   height: 150,
        // }}
        source={{
          height: 150,
          width: 150,
          uri: "https://rickandmortyapi.com/api/character/avatar/219.jpeg",
        }}
      />
      <View style={styles.row}>
        <View style={[styles.box, styles.redBox]} />
        <View style={[styles.box, styles.blueBox]} />
        <View style={[styles.box, { backgroundColor: "green" }]} />
      </View>
      <View style={styles.row}>
        <View style={[styles.box, styles.redBox]} />
        <View style={[styles.box, styles.blueBox]} />
        <View style={[styles.box, { backgroundColor: "green" }]} />
      </View>
      <View style={styles.row}>
        <View style={[styles.box, styles.redBox]} />
        <View style={[styles.box, styles.blueBox]} />
        <View style={[styles.box, { backgroundColor: "green" }]} />
      </View>
      <View style={styles.row}>
        <View style={[styles.box, styles.redBox]} />
        <View style={[styles.box, styles.blueBox]} />
        <View style={[styles.box, { backgroundColor: "green" }]} />
      </View>
      <View style={styles.row}>
        <View style={[styles.box, styles.redBox]} />
        <View style={[styles.box, styles.blueBox]} />
        <View style={[styles.box, { backgroundColor: "green" }]} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={[styles.box, styles.redBox]} />
        <View style={[styles.box, styles.blueBox]} />
        <View style={[styles.box, { backgroundColor: "green" }]} />
      </View>
      <Button
        title="Click Me"
        onPress={() => {
          console.log("Hello");
          Alert.alert("Lorem Ipsum");
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log("Hello");
          Alert.alert("Lorem Ipsum");
        }}
      >
        <Text style={styles.button}>Click me</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "purple",
    padding: 16,
    borderRadius: 16,
  },
  buttonText: {
    color: "#fff",
  },
  root: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "purple",
  },
  redBox: {
    backgroundColor: "red",
  },
  blueBox: {
    backgroundColor: "blue",
  },
  localImage: {
    width: 150,
    height: 150,
  },
});
