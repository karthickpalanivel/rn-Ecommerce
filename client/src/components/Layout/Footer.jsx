import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";

const Tab = createBottomTabNavigator();

const Footer = () => {
  return (
    <View>
      <Text>Footer</Text>
    </View>
  );
};

export default Footer;
