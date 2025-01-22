import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CardShadow = ({ children, style }) => {
  return <View style={[style, styles.container]}>{children}</View>;
};

export default CardShadow;

const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
});
