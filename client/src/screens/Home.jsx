import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../components/Layout/Layout";
import Header from "../components/Layout/Header";
import Categories from "../components/category/Categories";
import Banner from "../components/banner/Banner";
import Products from "../components/products/Products";
import Footer from "../components/Layout/Footer";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Categories />
      <Banner />
      <Products />
      <Footer />
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
    zIndex: 100,
    borderTopWidth: 1,
    borderColor: "#ccc",
    borderColor: "lightgray",
    position: "absoulte",
    bottom: 0,
    padding: 10,
  },
});
