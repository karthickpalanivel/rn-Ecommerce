import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const ProductCard = ({ props }) => {
  return (
    <View>
      <View style={styles.card}>
        <Image source={{ uri: props?.imageUrl }} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{props?.name}</Text>
        <Text>
          {props?.description.substring(0, 30)}...<Text>more</Text>
        </Text>
        <View>
          <TouchableOpacity>
            <Text>Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
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
});
