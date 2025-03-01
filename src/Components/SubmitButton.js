import { StyleSheet, Text, Pressable } from "react-native";
import { colors } from "../Global/colors";

const SubmitButton = ({ onSubmit, title }) => {
  return (
    <Pressable
      style={styles.button}
      onPress={() => {
        onSubmit();
      }}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.details,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
