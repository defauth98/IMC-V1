import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import FormItem from "../components/FormItem";
import ButtonCalc from "../components/ButtonCalc";

class FormPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      altura: "",
      peso: "",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formPeso}>
          <FormItem
            title="Peso"
            placeholder="kg"
            onChangeText={(peso) => this.setState({ peso: peso })}
            text={this.state.peso}
          />
        </View>
        <View style={styles.formAltura}>
          <FormItem
            title="Altura"
            placeholder="cm"
            onChangeText={(alt) => this.setState({ altura: alt })}
            text={this.state.altura}
          />
        </View>
        <View style={styles.button}>
          <ButtonCalc
            onPress={() => {
              this.props.navigation.navigate("Result", this.state);
              this.setState({ altura: "", peso: "" });
            }}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#464646",
    alignItems: "center",
    justifyContent: "center",
  },
  formPeso: {
    flex: 1,
    marginBottom: 100,
    marginTop: 20,
  },
  formAltura: {
    flex: 1,
    marginBottom: 150,
  },
  button: {
    flex: 1,
    marginBottom: 150,
  },
});

export default FormPage;
