import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DefaultLayout from "../components/Layout/DefaultLayout";
import Footer from "../components/Layout/Footer";


const CheckOut = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>CheckOut</Text>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#D73C46'
  },
  textHeader: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  },
  footer:{
    display: "flex",
    backgroundColor: 'white',
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
    zIndex: 100,
    borderTopWidth: 1,
    borderColor: "lightgray",
    position: "absolute",
    bottom: 0,
    padding: 10,
  }
});
