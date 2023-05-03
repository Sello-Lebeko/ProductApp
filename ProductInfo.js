import { StyleSheet, Text, Image,View } from "react-native";
import React from "react";
import ProductDisplay from "./Product";


export default function ProductInfo() {
  return (
    <View style={styles.productInfo}>
      
      <ProductDisplay
        productName="Rolex Watch"
        content="Build your confidence with rolex products."
        Image="./assets/watch.png"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  productInfo: {
    padding: 16,
  },
});
