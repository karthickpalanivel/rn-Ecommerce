import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useRoute, useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const Footer = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const BottomIcon = ({ iconName, displayName }) => {
    return (
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => navigation.navigate(displayName)}
      >
        <AntDesign
          name={iconName}
          style={[styles.icon, route.name === iconName && styles.active]}
        />
        <Text
          style={[styles.iconText, route.name === iconName && styles.active]}
        >
          {displayName}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.conatiner}>
      <BottomIcon iconName="home" displayName="Home" />
      <BottomIcon iconName="bells" displayName="Notification" />
      <BottomIcon iconName="user" displayName="Profile" />
      <BottomIcon iconName="shoppingcart" displayName="Cart" />
      <BottomIcon iconName="logout" displayName="Logout" />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  conatiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  menuContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 20,
    color: "#000",
  },
  iconText: {
    color: "#000",
  },
  active: {
    color: "#87ceeb",
  },
});
