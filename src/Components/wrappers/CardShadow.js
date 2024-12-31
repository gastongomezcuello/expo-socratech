import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CardShadow = ({ children, style }) => {
  return <View style={[style, styles.container]}>{children}</View>;
};

export default CardShadow;

const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 10,
  },
});
