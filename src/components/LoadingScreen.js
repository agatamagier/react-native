import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

import loadingAnimation from "../../assets/animations/loading.json";

export const LoadingScreen = () => {
  return (
    <LottieView
      source={loadingAnimation}
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
