import React, { useEffect, useState } from "react";

import {
  ScrollView,
  View,
  StyleSheet,
  StatusBar,
  TextInput,
} from "react-native";
import ProductItem from "./assets/components/ProductItem";
import ProductsList from "./assets/database/ProductsList";

export default function App() {
  const [toShowProducts, setToShowProducts] = useState([]);
  const [product, setProduct] = useState("");

  useEffect(() => {
    setToShowProducts(ProductsList.products);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.Scrollview}>
        {toShowProducts.map((item) => {
          return (
            <View key={item.id}>
              <ProductItem productKey={item.id} itemName={item.name} />
            </View>
          );
        })}
      </ScrollView>
      <TextInput
        value={product}
        style={styles.searchBar}
        onChangeText={(productDescription) => {
          setProduct(productDescription);
          if (productDescription == "") {
            setToShowProducts(ProductsList.products);
          } else {
            setToShowProducts([]);
            let searchedProduct = [];
            ProductsList.products.map((item) => {
              if (
                item.name
                  .toLowerCase()
                  .match(productDescription.toLowerCase(), "ig") != null
              ) {
                searchedProduct.push(item);
              } else {
                setToShowProducts([{ id: 999, name: "No product/s found." }]);
              }
            });
            setToShowProducts(searchedProduct);
          }
        }}
        enablesReturnKeyAutomatically={true}
        numberOfLines={1}
        placeholder="Product name"
      />
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
        style={{}}
      ></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: "1%",
    margin: "1%",
  },

  Scrollview: {
    paddingTop: "5%",
    width: "96%",
    marginBottom: "2%",
  },

  searchBar: {
    height: 70,
    width: "96%",
    borderRadius: 10,
    marginBottom: "2%",
    fontSize: 20,
    paddingLeft: "5%",
    position: "absolute",
    backgroundColor: "#fff",
    bottom: "3%",
    elevation: 10,
  },
});
