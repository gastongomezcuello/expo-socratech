import { StyleSheet, Text, Pressable, View, Image } from "react-native";
import CardShadow from "../Components/wrappers/CardShadow";
import { useEffect } from "react";
import { colors } from "../Global/colors";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

const ItemDetail = ({ route }) => {
  const dispatch = useDispatch();
  const { item: product } = route.params;

  const onAddCart = () => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        {product ? (
          <CardShadow style={styles.productContainer}>
            <Image
              source={{ uri: product.image }}
              style={styles.image}
              resizeMode="contain"
            />
            <View>
              <Text style={styles.titleText}>{product.title}</Text>
              <Text style={styles.descriptionText}>{product.description}</Text>
              <Text style={styles.descriptionTextPrice}>${product.price}</Text>
              <Pressable style={styles.buy} onPress={() => onAddCart()}>
                <Text style={styles.buyText}>Agregar al carrito</Text>
              </Pressable>
            </View>
          </CardShadow>
        ) : (
          <AnimatedLoader />
        )}
      </View>
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.lightGray,
  },
  container: {
    flex: 1,
  },
  productContainer: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
  },

  image: {
    width: "100%",
    height: 300,
  },
  buy: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 10,
  },
  titleText: {
    fontSize: 30,
    margin: 10,
    fontFamily: "Montserrat-Bold",
  },
  descriptionText: {
    fontSize: 18,
    margin: 10,
    fontFamily: "Montserrat-Regular",
  },
  descriptionTextPrice: {
    fontSize: 20,
    margin: 10,
    fontFamily: "Montserrat-Bold",
  },
  buyText: {
    fontSize: 20,
    color: "white",
    fontFamily: "Montserrat-Bold",
  },
});
