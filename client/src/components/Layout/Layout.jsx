import { View } from "react-native";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { StatusBar } from "expo-status-bar";
import Categories from "../category/Catnodeegories";
import Banner from "../banner/Banner";
import Products from "../products/Products";

const Layout = ({ props }) => {
  return (
    <>
      <StatusBar style="auto" />
      <Header />
      <View>
        <Categories />
      </View>
      <Banner />
      <Products />
    </>
  );
};

export default Layout;
