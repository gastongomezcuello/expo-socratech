import { StyleSheet, Text, Pressable } from "react-native";

import CardShadow from "./wrappers/CardShadow";
import { colors } from "../Global/colors";
import { useNavigation } from "@react-navigation/native";

const CategoryItem = ({ category }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("ItemListCategory", { category });
      }}
    >
      <CardShadow style={styles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
      </CardShadow>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.secondary,
    marginHorizontal: 10,
    marginVertical: 30,
    padding: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: colors.darkSecondary,
  },
  text: {
    fontSize: 25,
    color: "white",
  },
});
