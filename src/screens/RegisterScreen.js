import { Text, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm } from "react-hook-form";
import { object, string, ref } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ControlledInput } from "../components/ControlledInput";

import { routes } from "../constants/routes";

const validationSchema = object().shape({
  email: string().email().required(),
  password: string().min(8).required(),
  confirmPassword: string().oneOf([ref("password")], "Passwords must match"),
});

const defaultValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

export const RegisterScreen = ({ navigation }) => {
  const { control, handleSubmit } = useForm({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(validationSchema),
  });

  const onRegister = (data) => {
    navigation.navigate(routes.LOGIN);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text>RegisterScreen</Text>
      <ControlledInput
        control={control}
        name="email"
        placeholder="Enter email"
        label="Email"
      />
      <ControlledInput
        control={control}
        name="password"
        placeholder="Enter password"
        label="Password"
        secureTextEntry
      />
      <ControlledInput
        control={control}
        name="confirmPassword"
        placeholder="Enter confirm password"
        label="Confirm Password"
        secureTextEntry
      />
      <Button title="Register" onPress={handleSubmit(onRegister)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
});
