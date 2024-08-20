import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { ProductsData } from "../../../data/ProductsData";
import Layout from "../Layout/Layout";
import Header from "../Layout/Header";
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
    <View>
      <Text>ProductDetails</Text>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
