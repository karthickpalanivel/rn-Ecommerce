import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductCard from "./ProductCard";
import { ProductsData } from "../../../data/ProductsData";

const Products = () => {
  return (
    <View >
      <View style={styles.container}>
        {ProductsData?.map((p) => {
          return <ProductCard key={p._id} props={p} />;
        })}
      </View>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    justifyContent:"center",
    alignItems: "center",
  }
});
