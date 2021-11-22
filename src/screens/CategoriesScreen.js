import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoriesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Categories Screen</Text>
      <Button
        title="test"
        onPress={() => {
          props.navigation.navigate({ routeName: "Categorymeals" });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
