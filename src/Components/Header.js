import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { colors } from "../Global/colors";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Header</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    padding: 10,
    marginTop: 50,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});
