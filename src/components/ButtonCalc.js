import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const ButtonCalc = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>Calcular</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: "center",
  },
  text: {
    fontSize: 25,
  },
});

export default ButtonCalc;
