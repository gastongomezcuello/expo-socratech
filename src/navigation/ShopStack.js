import { StyleSheet, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Screens/Home";
import ItemDetail from "../Screens/ItemDetail";
import ItemListCategory from "../Screens/ItemListCategory";
import { colors } from "../Global/colors";
import Header from "../Components/Header";

const Stack = createNativeStackNavigator();

const ShopStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={() => ({
          header: () => <Header title="Home" />,
        })}
        name="Categorías"
        component={Home}
      />
      <Stack.Screen
        options={({ navigation, route }) => ({
          header: (back) => (
            <Header
              navigation={navigation}
              title={route.params.category}
              canGoBack={!!back}
            />
          ),
        })}
        name="ItemListCategory"
        component={ItemListCategory}
      />
      <Stack.Screen
        options={({ navigation, route }) => ({
          header: (back) => (
            <Header
              navigation={navigation}
              title={route.params.item.title}
              canGoBack={!!back}
            />
          ),
        })}
        name="ItemDetail"
        component={ItemDetail}
      />
    </Stack.Navigator>
  );
};

export default ShopStack;

const styles = StyleSheet.create({});
