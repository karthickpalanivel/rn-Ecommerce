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
    <View>
      <Text style={sytles.heading}>
        {cartItems?.length > 0
          ? `You have ${cartItems?.length} Item left in your cart`
          : `OOPS, Buy something because is empty`}
      </Text>
      {cartItems?.length > 0 && (
        <>
          <ScrollView>
            {cartItems?.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}
          </ScrollView>
          <View>
            <PriceTable title={"Price"} price={999.0} />
            <PriceTable title={"Tax"} price={1.5} />
            <PriceTable title={"Shipping"} price={1.0} />
            <View style={sytles.grandTotal}>
              <PriceTable title={"Total"} price={1001.5} />
            </View>
            <TouchableOpacity
            style={sytles.btnCheckout}
            onPress={()=>navigation.navigate("checkout")}
            >
                <Text style={sytles.btnCheckoutText}> CheckOut</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
      <View style={sytles.footer}>
        <Footer/>
      </View>
    </View>
  );
};

export default Cart;

const sytles = StyleSheet.create({
  main: {
    flex: 'none'
  },
  footer: {
    display: "flex",
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
  heading: {
    textAlign: "center",
    color: "green",
    marginTop: 10,
  },
  grandTotal: {
    borderWidth: 1,
    borderColor: "lightgray",
    backgroundColor: "#fff",
    padding: 5,
    margin: 5,
    marginHorizontal: 20,
  },
  btnCheckout: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    backgroundColor: '#000',
    width: '90%',
    marginHorizontal: 20,
    borderRadius: 20,
  },
  btnCheckoutText:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
