import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getItemsByCategory } from "../firebase/db";

const ItemListCategory = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItemsByCategory("smart-home").then((items) => {
      setItems(items);
      console.log(items);
    });
  }, []);

  return (
    <>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
      <View>
        <Text>ItemListCategory</Text>
      </View>
    </>
  );
};

export default ItemListCategory;

const styles = StyleSheet.create({});
