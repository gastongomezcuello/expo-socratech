import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import CartItem from "../Components/CartItem";
import { colors } from "../Global/colors";
import CardShadow from "../Components/wrappers/CardShadow";
import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/ordersService";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.value.items);
  const total = useSelector((state) => state.cart.value.total);
  const [triggerPost, result] = usePostOrderMutation();

  const confirmCart = () => {
    triggerPost({ total, cartItems, user: "loggedUser" });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartItem cartItem={item} />}
      />
      <View style={styles.confirmContainer}>
        <Text style={styles.text}>Total: ${total.toFixed(2)}</Text>
        <Pressable
          onPress={() => {
            confirmCart();
          }}
        >
          <CardShadow style={styles.confirm}>
            <Text style={styles.textConfirm}>Confirmar compra</Text>
          </CardShadow>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
  },
  confirmContainer: {
    flexDirection: "columns",
    backgroundColor: colors.extraLightSecondary,
    borderColor: colors.secondary,
    borderTopWidth: 1.5,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  confirm: {
    backgroundColor: colors.details,

    marginTop: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: colors.darkSecondary,
  },
  text: {
    fontSize: 20,
  },
  textConfirm: {
    fontSize: 20,
    color: colors.lightGray,
  },
});
