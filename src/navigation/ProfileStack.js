import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../Components/Header";
import Profile from "../Screens/Profile";
import ImageSelector from "../Screens/ImageSelector";

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={() => ({
          header: () => <Header title="Profile" isLogged={true} />,
        })}
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        options={() => ({
          header: () => <Header title="Image Selector" isLogged={true} />,
        })}
        name="ImageSelector"
        component={ImageSelector}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
