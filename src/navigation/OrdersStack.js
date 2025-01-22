import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Orders from "../Screens/Orders";

const Stack = createNativeStackNavigator();

const OrdersStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
};

export default OrdersStack;

const styles = StyleSheet.create({});
