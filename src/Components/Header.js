import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors } from "../Global/colors";

const Header = ({ navigation, title, canGoBack }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View style={{ height: insets.top }}></View>
      <View style={styles.header}>
        {canGoBack && (
          <Pressable
            style={styles.leftButton}
            onPress={() => navigation.goBack()}
          >
            <Text>Back</Text>
          </Pressable>
        )}
        <Text style={styles.headerText}>{title}</Text>
        <Pressable style={styles.rightButton} onPress={() => {}}>
          <Text>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderColor: colors.darkPrimary,
    borderBottomWidth: 1.5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  headerText: {
    color: "black",
    fontSize: 20,
  },
  rightButton: {
    position: "absolute",
    right: 10,
    padding: 10,
  },
  leftButton: {
    position: "absolute",
    left: 10,
    padding: 10,
  },
});
