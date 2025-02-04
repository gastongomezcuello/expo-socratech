import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SubmitButton from "./SubmitButton";
import InputForm from "./InputForm";
import CardShadow from "./wrappers/CardShadow";

const FormContainer = ({
  onSubmit,
  signup,
  setEmail,
  setPassword,
  setConfirmPassword,
  errorMail,
  errorPassword,
  errorConfirmPassword,
  errorApi,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <CardShadow style={styles.formContainer}>
        <InputForm label={"Email"} onChange={setEmail} error={errorMail} />
        <InputForm
          label={"Contraseña"}
          onChange={setPassword}
          error={errorPassword}
          isSecure={true}
        />
        {signup ? (
          <InputForm
            label={"Confirmar contraseña"}
            onChange={setConfirmPassword}
            error={errorConfirmPassword}
            isSecure={true}
          />
        ) : null}
        {errorApi ? <Text style={styles.error}>{errorApi}</Text> : null}
        <SubmitButton
          title={signup ? "Registrarme" : "Iniciar sesión"}
          onSubmit={onSubmit}
        />
        <Text>
          {signup ? "Ya tienes una cuenta?" : "No tienes una cuenta?"}
        </Text>
        <Pressable
          onPress={() => {
            signup
              ? navigation.navigate("Login")
              : navigation.navigate("Signup");
          }}
        >
          <Text style={styles.link}>
            {signup ? "Inicia sesión" : "Regístrate"}
          </Text>
        </Pressable>
      </CardShadow>
    </View>
  );
};

export default FormContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 70,
  },
  formContainer: {
    width: "80%",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
    padding: 10,
  },
  error: {
    width: "90%",
    fontSize: 12,
    color: "red",
    fontFamily: "Montserrat-Regular",
  },
});
