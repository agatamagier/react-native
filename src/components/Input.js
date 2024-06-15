import { StyleSheet, TextInput, View, Text } from "react-native";

export const Input = ({ inputRef, label, errorMessage, ...rest }) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, errorMessage ? styles.inputError : {}]}
        ref={inputRef}
        {...rest}
      />
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "black",
  },
  inputError: {
    borderColor: "red",
  },
  label: {},
  errorMessage: {
    color: "red",
  },
  container: {
    gap: 8,
  },
});
