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
    alert('product added to cart')
  }

  return (
    <View>
      <Pressable style={styles.card} onPress={() => handleMoreButton(props._id)}>
        <Image source={{ uri: props?.imageUrl }} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{props?.name}</Text>
        <Text>
          {props?.description.substring(0, 30)}...<Text>more</Text>
        </Text>
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
          <TouchableOpacity style={[styles.ordering, styles.shadowProp]} onPress={handleAddToCart}>
            <Text>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {},
  card: {
    borderWidth: 1,
    borderColor: "lightgray",
    marginVertical: 5,
    marginHorizontal: 8,
    width: "45%",
    padding: 10,
    backgroundColor: "#fff",
  },
  cardImage: {
    height: 120,
    width: "100%",
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
