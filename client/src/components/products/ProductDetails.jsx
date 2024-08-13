import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { ProductsData } from "../../../data/ProductsData";
import Layout from "../Layout/Layout";
import Header from "../Layout/Header";
import Categories from "../category/Categories";
import Footer from "../Layout/Footer";
import DefaultLayout from "../Layout/DefaultLayout";


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
    <DefaultLayout style={{ backgroundColor: "white" }}>
      
      
      {/* <Text>ProductDetails {params._id}</Text>
      <Text>{JSON.stringify(pDetails,null,4)}</Text> */}

      <Image source={{ uri: pDetails?.imageUrl }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{pDetails?.name}</Text>
        <Text style={styles.title}>${pDetails.price}</Text>
        <Text style={styles.desc}>{pDetails.description}</Text>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btnCart}
          onPress={() => alert(`${qty} items added to cart`)}
          disabled={pDetails?.quantity <= 0}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {pDetails?.quantity > 0 ? "ADD TO CART" : "OUT OF STOCK"}
          </Text>
        </TouchableOpacity>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnQty} onPress={qty >= 0 && subQty}>
            <Text style={styles.btnQtyText}>-</Text>
          </TouchableOpacity>
          <Text>{qty}</Text>
          <TouchableOpacity style={styles.btnQty} onPress={addQty}>
            <Text style={styles.btnQtyText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </DefaultLayout>

  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
  },
  container: {
    marginHorizontal: 10,
    marginVertical: 15,
  },
  title: {
    fontSize: 18,
    textAlign: "left",
  },
  desc: {
    fontSize: 14,
    textTransform: "capitalize",
    textAlign: "justify",
    marginVertical: 20,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 20,
  },
  btnCart: {
    width: 180,
    backgroundColor: "#000",
    borderRadius: 5,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 6,
  },
  btnCartText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  btnQty: {
    backgroundColor: "lightgray",
    width: 40,
    alignItems: "center",
    marginHorizontal: 10,
  },
  btnQtyText: {
    fontSize: 18,
  },
});
