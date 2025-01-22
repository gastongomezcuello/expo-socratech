import { Pressable, StyleSheet, Text, Image } from "react-native";
import { colors } from "../Global/colors";
import { useNavigation } from "@react-navigation/native";

const ProductItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.card}
      onPress={() => {
        navigation.navigate("ItemDetail", { item });
      }}
    >
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: item.image }}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>${item.price}</Text>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  card: {
    height: 350,
    width: "50%",
  },
  title: {
    fontFamily: "Lobster-Regular",
    fontSize: 18,

    alignSelf: "center",
    paddingBottom: 10,
    color: colors.secondary,
  },
  text: {
    fontSize: 14,
    alignSelf: "center",
    color: "black",
    fontFamily: "Lobster-Regular",
  },
  image: {
    height: 150,
    aspectRatio: 1,
    alignSelf: "center",
    padding: 10,
    borderRadius: 10,
  },
});
