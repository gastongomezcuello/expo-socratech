import { StyleSheet, Text, View, Pressable } from "react-native";
import CardShadow from "./wrappers/CardShadow";

const CartItem = ({ orderItem }) => {
  return (
    <Pressable onPress={() => {}}>
      <CardShadow style={styles.cardContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text2}>Fecha: {orderItem.updatedAt}</Text>

          <Text style={styles.text3}>Total: ${orderItem.total.toFixed(2)}</Text>
        </View>
      </CardShadow>
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
    borderRadius: 10,
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
