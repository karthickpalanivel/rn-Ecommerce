import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { ProductsData } from "../../../data/ProductsData";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const ProductDetails = ({ route }) => {
  const [pDetails, setPDetails] = useState({});
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const getProduct = ProductsData.find((item) => {
      return item?._id === params?._id;
    });
    setPDetails(getProduct);
  }, [route.params._id]);

  const addQty = () => {
    if (qty === 10) return alert(`you can't add more than 10 quantity`);
    return setQty((prev) => prev + 1);
  };
  const subQty = () => {
    if (qty <= 1) return;
    setQty((prev) => prev - 1);
  };

  const { params } = route;
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}></Text>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D73C46",
  },
  footer: {
    display: "flex",
    backgroundColor: "white",
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
    zIndex: 100,
    borderTopWidth: 1,
    borderColor: "lightgray",
    position: "absolute",
    bottom: 0,
    padding: 10,
  },
});
