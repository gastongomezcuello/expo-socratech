import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../Components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <FlatList
        data={["item1", "item2", "item3"]}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
