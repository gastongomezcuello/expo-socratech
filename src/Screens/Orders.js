import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import OrderItem from "../Components/OrderItem";

import { colors } from "../Global/colors";
import { useGetOrdersQuery } from "../services/ordersService";
import { useSelector } from "react-redux";

const Orders = () => {
  const localId = useSelector((state) => state.auth.value.localId);
  const { data: orders } = useGetOrdersQuery(localId);

  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.updatedAt}
        renderItem={({ item }) => <OrderItem orderItem={item} />}
      />
    </View>
  );
};

export default Orders;

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
