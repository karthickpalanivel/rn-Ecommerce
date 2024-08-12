import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Header = () => {
  const [search, setSearch] = useState("");

  //serach utility
  const handleSearch = () => {
    console.log(search);
    setSearch('')
  };

  const changeText = (text) => {
    setSearch(text);
    console.log(search);
  };

  return (
    <View style={{ height: 90 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={search}
          onChangeText={(text) => setSearch(text)}
          placeholder="search"
        />
        <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
          <FontAwesome name="search" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderWidth: 0.3,
    width: "100%",
    position: "absolute",
    left: 15,
    height: 40,
    color: "#000000",
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    fontSize: 16,
    borderRadius: 5,
  },
  searchBtn: {
    position: "absolute",
    left: "93%",
  },
  icon: {
    color: "000000",
    fontSize: 16,
  },
});
