import { View, Text } from "react-native";
import React from "react";
import Header from "./Header";

const Layout = ({ props }) => {
  return (
    <>
      <Header />
      <View>{props}</View>
    </>
  );
};

export default Layout;
