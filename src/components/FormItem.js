import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const FormItem = (props) => {
  const { title, placeholder, onChangeText, text } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType="numeric"
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  label: {
    fontSize: 30,
    marginBottom: 5,
  },
  input: {
    marginBottom: 10,
    height: 50,
    fontSize: 30,
  },
});

export default FormItem;
