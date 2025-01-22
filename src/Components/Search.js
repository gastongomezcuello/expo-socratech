import { Pressable, StyleSheet, TextInput, View, Text } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { colors } from "../Global/colors";

const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const search = () => {
    const regex = /^[a-zA-Z0-9\s]*$/;
    if (!regex.test(input)) {
      setError("Only letters and numbers are allowed");
      return;
    }
    onSearch(input);
  };
  const removeInput = () => {
    setInput("");
    setError("");
  };
  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Search product..."
        />
        <Pressable style={styles.button} onPress={search}>
          <AntDesign name="search1" size={24} color="black" />
        </Pressable>
        <Pressable style={styles.button} onPress={removeInput}>
          <Entypo name="circle-with-cross" size={24} color="black" />
        </Pressable>
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    padding: 10,
  },
  input: {
    color: "black",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.secondary,
    width: "80%",
    fontSize: 20,
  },
  button: {
    margin: 10,
  },
});
