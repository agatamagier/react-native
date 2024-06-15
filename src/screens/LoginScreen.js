import { Text, Button, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm, Controller } from "react-hook-form";

const defaultValues = {
  email: "",
  password: "",
};

export const LoginScreen = ({ navigation }) => {
  const { control, handleSubmit } = useForm({
    defaultValues,
    mode: "onBlur",
  });

  const onLogin = (data) => {
    // navigation.navigate("Login");
    console.log("test ", data);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text>LoginScreen</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onBlur, onChange, ref, value, disabled } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter email"
            value={value}
            onBlur={onBlur}
            ref={ref}
            editable={!disabled}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onBlur, onChange, ref, value, disabled } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            value={value}
            onBlur={onBlur}
            ref={ref}
            editable={!disabled}
            onChangeText={onChange}
          />
        )}
      />
      <Button title="Login" onPress={handleSubmit(onLogin)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  input: {
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "red",
  },
});
