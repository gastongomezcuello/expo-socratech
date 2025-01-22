import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";

const Cart = ({ cart }) => {
  return (
    <View>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartItem cartItem={item} />}
      />
      <View>
        <Pressable>
          <Text>Confirm</Text>
        </Pressable>
        <Text>Total:{}</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
