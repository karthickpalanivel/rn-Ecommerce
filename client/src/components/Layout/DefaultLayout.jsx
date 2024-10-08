import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <StatusBar />
      <View style={styles.container}>{children}</View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </>
  );
};

export default DefaultLayout;

const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    backgroundColor: "#D73C46",
  },
  footer: {
    backgroundColor: 'white',
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
});
