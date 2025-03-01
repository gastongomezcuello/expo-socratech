import { StyleSheet, Text, View, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../Global/colors";
import CardShadow from "./wrappers/CardShadow";
import { useDispatch } from "react-redux";
import { removeItem } from "../features/cart/cartSlice";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const onRemoveCart = () => {
    dispatch(removeItem({ id: cartItem.id }));
  };
  return (
    <Pressable onPress={() => {}}>
      <CardShadow style={styles.cardContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{cartItem.title}</Text>
          <Text style={styles.text2}>Unidades: {cartItem.quantity}</Text>
          <Text style={styles.text2}>
            Precio x unidad: ${cartItem.price.toFixed(2)}
          </Text>
          <Text style={styles.text3}>
            Subtotal: ${(cartItem.quantity * cartItem.price).toFixed(2)}
          </Text>
        </View>
        <Pressable onPress={() => onRemoveCart(cartItem.id)}>
          <Entypo name="trash" size={24} color="black" />
        </Pressable>
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
