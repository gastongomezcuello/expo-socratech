import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Header from "../Components/Header";
import Login from "../Screens/Login";
import Signup from "../Screens/Signup";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={() => ({
          header: () => <Header title="Inicia sesión" />,
        })}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={() => ({
          header: () => <Header title="Regístrate" />,
        })}
        name="Signup"
        component={Signup}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
