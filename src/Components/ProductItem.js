import { Pressable, StyleSheet, Text, Image } from "react-native";
import { colors } from "../Global/colors";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setProductIdSelected } from "../features/shop/shopSlice";

const ProductItem = ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <Pressable
      style={styles.card}
      onPress={() => {
        dispatch(setProductIdSelected(item.id));

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
    height: "auto",
    width: "49%",
    borderWidth: 1,
    borderColor: colors.darkSecondary,
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
    paddingBottom: 10,
  },
  image: {
    height: 150,
    aspectRatio: 1,
    alignSelf: "center",
    padding: 10,
    borderRadius: 10,
  },
});
