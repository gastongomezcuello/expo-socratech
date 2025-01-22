import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialComunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import { Fontisto } from "@expo/vector-icons";
import OrdersStack from "./OrdersStack";
import CartStack from "./CartStack";
import ShopStack from "./ShopStack";
import { colors } from "../Global/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveBackgroundColor: colors.darkPrimary,
          tabBarInactiveTintColor: colors.secondary,
          tabBarActiveTintColor: colors.darkSecondary,
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
          },
        })}
      >
        <Tab.Screen
          name="ShopTab"
          component={ShopStack}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View>
                  <MaterialComunityIcons
                    name="shopping-outline"
                    size={32}
                    color={focused ? colors.darkSecondary : colors.secondary}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="CartTab"
          component={CartStack}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View>
                  <Feather
                    name="shopping-cart"
                    size={32}
                    color={focused ? colors.darkSecondary : colors.secondary}
                  />
                </View>
              );
            },
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="OrdersTab"
          component={OrdersStack}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View>
                  <Fontisto
                    name="shopping-pos-machine"
                    size={32}
                    color={focused ? colors.darkSecondary : colors.secondary}
                  />
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
