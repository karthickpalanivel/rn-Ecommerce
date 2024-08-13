import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const ProductDetails = ({ route }) => {
  const [productDisplay, setProductDisplay] = useState({});

  const { params } = route;

  useEffect(() => {
    //find product
    const getProduct = ProductDetails.find((p) => {
      return p._id === params.id;
    });
    setProductDisplay(getProduct);
  });
  return (
    <View>
      <Text>ProductDetails {params._id}</Text>
      <Text>Product Details {JSON.stringify(p)}</Text>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
