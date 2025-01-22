import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getItemsByCategory } from "../firebase/db";
import Header from "../Components/Header";
import Search from "../Components/Search";
import ProductItem from "../Components/ProductItem";
import CardShadow from "../Components/wrappers/CardShadow";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ItemListCategory = ({ route }) => {
  const insets = useSafeAreaInsets();

  const { category } = route.params;

  const [items, setItems] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    getItemsByCategory(category).then((items) => {
      setItems(items);
    });
  }, []);
  const onSearch = (value) => {
    setSearch(items.filter((item) => item.title.includes(value)));
  };

  return (
    <View style={styles.container}>
      <Search onSearch={onSearch} />
      <CardShadow
        style={[styles.listContainer, { marginBottom: insets.bottom }]}
      >
        <FlatList
          data={search.length > 0 ? search : items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductItem item={item} />}
        />
      </CardShadow>
    </View>
  );
};

export default ItemListCategory;

const styles = StyleSheet.create({
  container: { flex: 1 },
  listContainer: {
    flex: 1,
    padding: 10,
    width: "90%",
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 10,
  },
});
