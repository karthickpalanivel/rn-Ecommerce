import { View } from "react-native";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { StatusBar } from "expo-status-bar";
import Categories from "../category/Categories";
import Banner from "../banner/Banner";
import Product from "../products/Product";

const Layout = ({ props }) => {
  return (
    <>
      <StatusBar style="auto" />
      <Header />
      <View>
        <Categories />
      </View>
      <Banner />
      <Product />
    </>
  );
};

export default Layout;
