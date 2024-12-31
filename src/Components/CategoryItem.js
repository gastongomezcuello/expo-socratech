import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

import CardShadow from "./wrappers/CardShadow";

const CategoryItem = ({ category }) => {
  return (
    <Pressable onPress={() => console.log({ category })}>
      <CardShadow style={styles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
      </CardShadow>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "red",
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  text: {
    fontSize: 20,
  },
});
