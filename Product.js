import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function ProductDisplay({productName,content}) {
  const [quantity, setQuantity] = useState(1);
  const pricePerProduct = 1000.00;
  const totalPrice = quantity * pricePerProduct;


  function handleIncreaseQuantity() {
    setQuantity(quantity + 1);
  };

  function handleDecreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.productName}>{productName}</Text>
      <Text>{content}</Text>
      <Text style={styles.price}>M{pricePerProduct} each</Text>
      <Image source={require('./assets/watch.png')} style= {styles.image} />
    
      <View style={styles.quantityAdjustments}>
        <TouchableOpacity onPress={handleIncreaseQuantity}>
          <View style={styles.button}>
          <AntDesign name="pluscircle" size={24} color="#fff" />
          </View>
        </TouchableOpacity>

        <Text style={styles.quantity}>{quantity} Selected</Text>

        <TouchableOpacity onPress={handleDecreaseQuantity}>
          <View style={styles.button}>
          <AntDesign name="minuscircle" size={24} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.totalPrice}>Total: M{totalPrice}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: "blue",
    marginBottom: 10,
    alignItems:"center",
  },
  image: {
    width: 120,
    height: 110,
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: 'gold',
    marginBottom: 20,
    backgroundColor:'red',
    padding: 5,
    margin: 10,

  },
  quantityAdjustments: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  button: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: '#e53935',
    borderRadius: 10,
    marginHorizontal: 2,
    
  },
  quantity: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
});
