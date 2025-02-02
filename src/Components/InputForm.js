import { StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";
import { colors } from "../Global/colors";

const InputForm = ({ label, onChange, error = "", isSecure = false }) => {
  const [input, setInput] = useState("");
  const onChangeText = (text) => {
    setInput(text);
    onChange(text);
  };
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.subtitle}>{label}</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  subtitle: {
    width: "90%",
    fontSize: 16,
    fontFamily: "Montserrat-Bold",
    marginBottom: 5,
  },
  input: {
    width: "90%",
    borderBottomWidth: 2,
    borderBottomColor: colors.details,
    padding: 2,
    fontSize: 14,
  },
  error: {
    width: "90%",
    fontSize: 12,
    color: "red",
    fontFamily: "Montserrat-Regular",
  },
});
