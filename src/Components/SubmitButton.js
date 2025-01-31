import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const SubmitButton = () => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>Confirmar compra</Text>
    </Pressable>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({});
