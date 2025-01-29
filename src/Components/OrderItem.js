import { StyleSheet, Text, View, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../Global/colors";

const CartItem = ({ orderItem }) => {
  const total = orderItem.items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  return (
    <Pressable style={styles.cardContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{orderItem.title}</Text>
        <Text style={styles.text2}>Unidades: {orderItem.quantity}</Text>

        <Text style={styles.text3}>
          Subtotal: ${(orderItem.quantity * orderItem.price).toFixed(2)}
        </Text>
      </View>
      <Pressable>
        <Entypo name="trash" size={24} color="black" />
      </Pressable>
    </Pressable>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    height: 120,
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: colors.darkSecondary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textContainer: {
    width: "70%",
    flexDirection: "column",
  },
  text: {
    fontSize: 20,
  },
  text2: {
    fontSize: 16,
  },
  text3: {
    fontSize: 18,
  },
});
