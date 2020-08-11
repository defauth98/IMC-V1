import React, { Component } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import textResult from "../uteis/textResult";

export default class ResultPage extends Component {
  calculator() {
    let state = this.props.navigation.state.params;

    let altura = Number(state.altura);
    let peso = Number(state.peso);

    if (altura == 0 || peso == 0) {
      return (
        <View style={styles.erroView}>
          <Text style={styles.erroText}>INSIRA OS VALORES!!</Text>
        </View>
      );
    }
    state = "";

    altura /= 100;

    let IMC = peso / (altura * altura);

    text = textResult(IMC);

    IMC = Math.round(IMC);

    return (
      <View style={styles.container}>
        <View style={styles.numberContainer}>
          <Text style={styles.numberResult}>{IMC}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textResult}>{text}</Text>
        </View>
      </View>
    );
  }
  render() {
    return this.calculator();
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#464646",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  numberContainer: {
    flex: 1,
  },
  numberResult: {
    marginTop: 50,
    color: "#fff",
    fontSize: 120,
  },
  textContainer: {
    marginTop: 50,
    flex: 1,
  },
  textResult: {
    color: "#fff",
    fontSize: 32,
  },
  erroView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#464646",
  },
  erroText: {
    fontSize: 50,
    color: "#f44",
    marginLeft: 60,
    marginBottom: 30,
  },
});
