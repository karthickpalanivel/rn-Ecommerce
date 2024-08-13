import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const CartItem = ({ item }) => {
  const [qty, setQty] = useState(0);

  //handling quantity
  const handleAddQty = () => {
    if (qty === 10) return alert(`you can't add more than 10 quantity`);
    setQty((prev) => prev + 1);
  };

  const handleSubQty = () => {
    if (qty < 1) return;
    setQty((prev) => prev - 1);
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: item?.imageUrl }} style={styles.image} />
      <View style={{ width: "40%" }}>
        <Text style={styles.name}>{item?.name}</Text>
        <Text style={styles.name}>Price: ${item?.price}</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnQty} onPress={handleSubQty}>
          <Text style={styles.btnQtyText}>-</Text>
        </TouchableOpacity>
        <Text>{qty}</Text>
        <TouchableOpacity style={styles.btnQty} onPress={handleAddQty}>
          <Text style={styles.btnQtyText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    height: 75,
    width: 75,
    resizeModel: "contain",
  },
  name: {
    fontSize: 13,
    marginVertical: 3,
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 10,
  },
  btnQty: {
    backgroundColor: "lightgray",
    width: 40,
    alignItems: "center",
    marginHorizontal: 10,
  },
  btnQtyText: {
    fontSize: 20,
  },
});
