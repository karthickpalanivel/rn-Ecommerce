import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import About from "./src/screens/About";
import ProductDetails from "./src/components/products/ProductDetails";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cart from "./src/screens/Cart";
import ProfileScreen from "./src/screens/ProfileScreen";
import WelcomeScreenOne from "./src/screens/welcomeScreens/WelcomeScreenOne";
import WelcomeScreenTwo from "./src/screens/welcomeScreens/WelcomeScreenTwo";
import WelcomeScreenThree from "./src/screens/welcomeScreens/WelcomeScreenThree";
import CheckOut from "./src/screens/CheckOut";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="WsOne" component={WelcomeScreenOne}/>
        <Stack.Screen name="WsTwo" component={WelcomeScreenTwo}/>
        <Stack.Screen name="WsThree" component={WelcomeScreenThree}/>
        <Stack.Screen name="checkout" component={CheckOut}/>

      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
