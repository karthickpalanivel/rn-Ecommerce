import { View, StyleSheet } from "react-native";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { StatusBar } from "expo-status-bar";
import Categories from "../category/Categories";
import Banner from "../banner/Banner";
import Products from "../products/Products";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import DefaultLayout from "./DefaultLayout";


const Tab = createBottomTabNavigator();

const Layout = ({ props }) => {
  return (
    <DefaultLayout>
      <StatusBar style="auto" />
      <Header />
      <View>
        <Categories />
      </View>
      <Banner />
      <Products />
      
    </DefaultLayout>
  );
};

export default Layout;

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    zIndex: 100,
    borderWidth: 1,
    borderColor: "#ccc",
    borderColor: "lightgray",
    position: "absoulte",
    bottom: 0,
    padding: 10,
  },
});
