import { StyleSheet, Text, View, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../Global/colors";

const CartItem = ({ cartItem }) => {
  return (
    <Pressable style={styles.cardContainer}>
      <View style={styles.textContainer}>
        <Text>{cartItem.title}</Text>
        <Text>{cartItem.quantity}</Text>
        <Text>{cartItem.price}</Text>
        <Text>Subtotal:{cartItem.title * cartItem.title}</Text>
      </View>
      <Pressable>
        <Entypo name="trash" size={24} color={colors.secondary} />
      </Pressable>
    </Pressable>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: "row",
  },
  textContainer: {
    width: "70%",
    flexDirection: "column",
  },
});
