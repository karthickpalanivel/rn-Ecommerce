import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ props }) => {
  const navigation = useNavigation();

  //more deatils about product
  const handleMoreButton = (id) => {
    navigation.navigate("ProductDetails", { _id: id });
  };

  //add to cart
  const handleAddToCart = () => {
    alert("product added to cart");
  };

  const buyNow = () => {
    alert("product bought");
  }

  return (
    <View style={{
      width: '90%'
    }}>
      <Pressable
        style={styles.card}
        onPress={() => handleMoreButton(props._id)}
      >
        <Image
          source={{ uri: props?.imageUrl || <Text>Images loading</Text> }}
          style={styles.cardImage}
        />
        <View>
          <Text style={styles.cardTitle}>{props?.name}</Text>
          <Text>
            {props?.description.substring(0, 30)}...<Text>more</Text>
          </Text>
          <Text>₹{props?.price}</Text>
          <View style={styles.options}>
            <TouchableOpacity
              style={[
                styles.ordering,
                { backgroundColor: "orange" },
                styles.shadowProp,
              ]}
            
            >
              <Text style={{ color: "white" }}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {},
  card: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "lightgray",
    marginVertical: 5,
    marginHorizontal: 8,
    width: "100%",
    padding: 10,
    backgroundColor: "#fff",
  },
  cardImage: {
    height: 120,
    width: "40%",
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  moreText: {},
  options: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  ordering: {
    marginHorizontal: 5,
    borderWidth: 0.1,
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginTop: 8,
  },
  shadowProp: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
