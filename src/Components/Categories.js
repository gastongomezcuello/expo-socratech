import { StyleSheet, View, FlatList } from "react-native";

import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";

const Categories = () => {
  const categories = useSelector((state) => state.shop.value.categories);
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.container}
        data={categories}
        keyExtractor={(category) => category}
        renderItem={({ item }) => <CategoryItem category={item} />}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 20,
    backgroundColor: "white",
  },
});
