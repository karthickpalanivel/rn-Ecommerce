import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import DefaultLayout from "../components/Layout/DefaultLayout";
import { CartData } from "../../data/CartData";
import PriceTable from "./cart/PriceTable";
import CartItem from "./cart/CartItem";
import Footer from "../components/Layout/Footer";

const Cart = ({ navigation }) => {
  const [cartItems, setCartItems] = useState(CartData);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        {cartItems?.length > 0
          ? `You have ${cartItems?.length} Item left in your cart`
          : `OOPS, Buy something because is empty`}
      </Text>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D73C46",
  },
  heading: {
    textAlign: "center",
    color: "green",
    marginTop: 10,
  },
  footer: {
    display: "flex",
    backgroundColor: "white",
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
    zIndex: 100,
    borderTopWidth: 1,
    borderColor: "lightgray",
    position: "absolute",
    bottom: 0,
    padding: 10,
  },
});
