import { FlatList, StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import Search from "../Components/Search";
import ProductItem from "../Components/ProductItem";
import CardShadow from "../Components/wrappers/CardShadow";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useGetProductsByCategoryQuery } from "../services/shopService";

const ItemListCategory = ({ route }) => {
  const { category } = route.params;
  const insets = useSafeAreaInsets();

  const {
    data: productsFilteredByCategory = {},
    isError,
    isLoading,
  } = useGetProductsByCategoryQuery(category);

  const [search, setSearch] = useState("");

  const productsArray = Object.values(productsFilteredByCategory);

  const filteredProducts = productsArray.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const onSearch = (value) => {
    setSearch(value);
  };

  if (isError) {
    return (
      <View>
        <Text>Algo salió mal...</Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View>
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Search onSearch={onSearch} />
      <CardShadow
        style={[styles.listContainer, { marginBottom: insets.bottom }]}
      >
        <FlatList
          data={search ? filteredProducts : productsArray}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductItem item={item} />}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      </CardShadow>
    </View>
  );
};

export default ItemListCategory;

const styles = StyleSheet.create({
  container: { flex: 1 },
  listContainer: {
    backgroundColor: "white",
    padding: 10,
    flex: 1,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
  },
  row: {
    justifyContent: "space-between",
  },
});
