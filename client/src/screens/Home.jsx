import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../components/Layout/Layout";
import Header from "../components/Layout/Header";
import Products from "../components/products/Products";
import Footer from "../components/Layout/Footer";
import DefaultLayout from "../components/Layout/DefaultLayout";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Products />
      <View style={styles.footer}>
        <Footer />
      </View>
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
