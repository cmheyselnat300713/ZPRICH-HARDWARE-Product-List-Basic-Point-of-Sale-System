import React from "react";

import { Text, StyleSheet, Pressable, View, Image, Alert } from "react-native";
import ProductsList from "../database/ProductsList";

function ProductItem(props) {
  const pList = ProductsList.products;

  return (
    <View style={styles.parentContainer}>
      <View style={styles.mainContainer}>
        <Pressable
          style={styles.pressableContainer}
          onPress={() => {
            let tappedProduct = pList.find(
              (item) => item.id == props.productKey
            );

            Alert.alert(
              props.itemName,
              `Price: ${tappedProduct.bentahan}\nBase: ${tappedProduct.puhunan}\nCateogry: ${tappedProduct.category}`
            );
          }}
        >
          <Text numberOfLines={1} style={styles.itemText}>
            {props.itemName}
          </Text>
        </Pressable>

        <Pressable
          style={styles.pressableContainer2}
          onPress={() => {
            alert("Add to cart..");
          }}
        >
          <Image
            resizeMethod="scale"
            resizeMode="contain"
            source={{
              uri: "https://www.pinclipart.com/picdir/big/378-3787178_png-file-svg-shopping-cart-icon-png-thin.png",
            }}
            style={styles.cartBtn}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  mainContainer: {
    width: "98%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: "4%",
    paddingBottom: "2%",
    paddingTop: "2%",
    paddingRight: "2%",
    backgroundColor: "#fff",
    elevation: 5,
    borderRadius: 10,
  },

  pressableContainer: {
    width: "80%",
    paddingTop: "3%",
    paddingBottom: "3%",
    paddingLeft: "2%",
  },

  pressableContainer2: {
    width: "15%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 200, 55, 0.5)",
    marginLeft: "5%",
    borderRadius: 10,
  },

  itemText: {
    fontSize: 20,
  },

  cartBtn: {
    width: "40%",
    height: "50%",
  },
});

export default ProductItem;
