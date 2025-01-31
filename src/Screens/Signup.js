import { StyleSheet, Text, View, Pressable } from "react-native";
import InputForm from "../Components/InputForm";
import SubmitButton from "../Components/SubmitButton";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
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
        <InputForm
          label={"confirm password"}
          onChange={() => {}}
          error={""}
          isSecure={true}
        />
        <SubmitButton title="Send" onPress={onSubmit} />
        <Text>Ya tienes una cuenta?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text>Inicia sesión</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
