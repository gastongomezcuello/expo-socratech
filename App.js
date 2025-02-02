import { StyleSheet, StatusBar, Platform } from "react-native";
import { useFonts } from "expo-font";
import { fonts } from "./src/Global/fonts";
import { colors } from "./src/Global/colors";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainNavigator from "./src/navigation";
import { Provider } from "react-redux";
import store from "./src/app/store";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent={Platform.OS === "android"}
      />
      <SafeAreaProvider>
        <Provider store={store}>
          <MainNavigator />
        </Provider>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
