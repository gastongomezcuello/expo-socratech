import { StyleSheet, Text, Pressable } from "react-native";
import { colors } from "../Global/colors";

const AddButton = ({ onPress, title }) => {
  return (
    <Pressable
      style={styles.button}
      onPress={() => {
        onPress();
      }}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
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
