import { View, Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialComunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import { Fontisto } from "@expo/vector-icons";
import OrdersStack from "./OrdersStack";
import CartStack from "./CartStack";
import ShopStack from "./ShopStack";
import { colors } from "../Global/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const insets = useSafeAreaInsets();
  const itemsQty = useSelector((state) => state.cart.value.items.length);

  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: colors.darkPrimary,
        tabBarInactiveTintColor: colors.details,
        tabBarActiveTintColor: colors.darkSecondary,
        tabBarButton: (props) => <Pressable {...props} android_ripple={null} />,
        tabBarItemStyle: {
          height: 70,
        },
        tabBarIconStyle: {
          width: 40,
          height: 40,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
        },
        tabBarStyle: {
          height: insets.bottom + 70,
          backgroundColor: colors.primary,
          borderColor: colors.darkPrimary,
          borderTopWidth: 1.5,
        },
      })}
    >
      <Tab.Screen
        name="Tienda"
        component={ShopStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <MaterialComunityIcons
                  name="shopping-outline"
                  size={32}
                  color={focused ? colors.darkSecondary : colors.details}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Carrito"
        component={CartStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Feather
                  name="shopping-cart"
                  size={32}
                  color={focused ? colors.darkSecondary : colors.details}
                />
              </View>
            );
          },
          tabBarBadge: itemsQty > 0 ? itemsQty : null,
        }}
      />
      <Tab.Screen
        name="Órdenes"
        component={OrdersStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Fontisto
                  name="shopping-pos-machine"
                  size={32}
                  color={focused ? colors.darkSecondary : colors.details}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
