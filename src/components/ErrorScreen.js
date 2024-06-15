import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

import errorAnimation from "../../assets/animations/error.json";

export const ErrorScreen = () => {
  return (
    <LottieView
      source={errorAnimation}
      autoPlay
      loop
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
