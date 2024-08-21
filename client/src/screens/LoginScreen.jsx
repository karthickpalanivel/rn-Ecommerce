import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import DefaultLayout from "../components/Layout/DefaultLayout";
import CustomInput from "../components/CustomerInput";
import Footer from "../components/Layout/Footer";


const register = () => {
 console.log(`registered`); 
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
    <TouchableOpacity style={styles.button} onPress={register}>
      <Text style={styles.buttonText}>Register</Text>
    </TouchableOpacity>
  );
};

const LoginScreen = () => {
  
  const [userName, setUserName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', marginBottom: 5}}>
        <Text style={styles.textHeader}>REGISTER</Text>
        <Text style={styles.textHeader}>Seller / Buyer</Text>
      </View>
      <View style={styles.enterDetails}>
        <View>
          <CustomInputText text="User Name" value={userName} onChangeValue={setUserName} />
          <CustomInputText text="Mobile Number" value={mobile} onChangeValue={setMobile} />
          <CustomInputText text="Mail ID" value={email} onChangeValue={setEmail} />
          <CustomInputText text="Company Name" value={company} onChangeValue={setCompany} />
          <CustomInputText text="GST Number" value={gstNumber} onChangeValue={setGstNumber} />
        </View>
        <CustomButton />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D73C46",
  },
  enterDetails: {
    justifyContent: "flex-start",
    backgroundColor: "white",
    width: "80%",
    borderRadius: 20,
  },
  customInput: {
    padding: 5,
  },
  textHeader: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  textInput: {
    borderWidth: 1,
    width: "80%",
    padding: 5,
    borderRadius: 4,
    marginTop: "2%",
  },

  button: {
    alignItems: "center",
    padding: "5%",
  },
  buttonText: {
    borderWidth: 0.5,
    padding: "2%",
    borderColor: "black",
    borderRadius: 5,
  },
});
