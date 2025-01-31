import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import OrderItem from "../Components/OrderItem";
import orders from "../data/orders.json";
import { colors } from "../Global/colors";

const Cart = () => {
  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderItem orderItem={item} />}
      />
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
