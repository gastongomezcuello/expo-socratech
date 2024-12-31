import { Text, StyleSheet, Pressable } from "react-native";

const Button = ({ onPress, text }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({});
