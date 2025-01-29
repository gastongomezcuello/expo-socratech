import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../Screens/Cart";
import Header from "../Components/Header";

const Stack = createNativeStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={() => ({
          header: () => <Header title="Cart" />,
        })}
        name="Cart"
        component={Cart}
      />
    </Stack.Navigator>
  );
};

export default CartStack;

const styles = StyleSheet.create({});
