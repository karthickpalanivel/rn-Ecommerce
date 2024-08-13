import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductCard from "./ProductCard";
import { ProductsData } from "../../../data/ProductsData";

const Products = () => {
  return (
    <View>
      {ProductsData?.map((p) => {
        return <ProductCard key={p._id} props={p} />;
      })}
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({});
