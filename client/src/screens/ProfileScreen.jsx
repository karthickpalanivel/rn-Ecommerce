import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";
import React, { useState } from "react";
import DefaultLayout from "../components/Layout/DefaultLayout";
import CustomInput from "../components/CustomerInput";
import Footer from "../components/Layout/Footer";
import LoginScreen from "./LoginScreen";



const register = () => {
  
}

const CustomInputText = ({ text, value, onChangeValue }) => {
  return (
    <View style={{ margin: 10 }}>
      <View style={styles.customInput}>
        <Text>{text}</Text>
        <TextInput
          placeholder={`Enter your ${text}`}
          style={styles.textInput}
          value={value}
          onChangeText={onChangeValue}
        />
      </View>
    </View>
  );
};

const CustomButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Register</Text>
    </TouchableOpacity>
  );
};

const ProfileScreen = () => {


  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Profile Screen</Text>
      <View style={styles.footer}>
        <Footer />
      </View>
      
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D73C46",
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
