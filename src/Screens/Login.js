import { StyleSheet, Text, View, Pressable } from "react-native";
import InputForm from "../Components/InputForm";
import SubmitButton from "../Components/SubmitButton";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const onSubmit = () => {};
  return (
    <View>
      <View>
        <InputForm label={"email"} onChange={() => {}} error={""} />
        <InputForm
          label={"password"}
          onChange={() => {}}
          error={""}
          isSecure={true}
        />
        <SubmitButton title="Send" onPress={onSubmit} />
        <Text>No tienes una cuenta?</Text>
        <Pressable onPress={() => navigation.navigate("Signup")}>
          <Text>Registrate</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
