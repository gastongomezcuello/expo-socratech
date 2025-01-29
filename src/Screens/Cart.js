import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import CartItem from "../Components/CartItem";
import cart from "../data/cart.json";
import { colors } from "../Global/colors";
import CardShadow from "../Components/wrappers/CardShadow";

const Cart = () => {
  const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  return (
    <View>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartItem cartItem={item} />}
      />
      <View style={styles.confirmContainer}>
        <Text style={styles.textConfirm}>Total: ${total.toFixed(2)}</Text>
        <Pressable>
          <CardShadow style={styles.confirm}>
            <Text style={styles.textConfirm}>Confirm</Text>
          </CardShadow>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  confirmContainer: {
    flexDirection: "columns",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 10,
  },
  confirm: {
    backgroundColor: colors.primary,

    marginTop: 40,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: colors.darkPrimary,
  },
  textConfirm: {
    fontSize: 20,
  },
});
