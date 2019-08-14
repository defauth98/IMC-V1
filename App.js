import React, { Component } from 'react';
import { View,Text,StyleSheet } from 'react-native';

import FormItem from './src/components/FormItem.js'
import ButtonCalc from './src/components/ButtonCalc'

export default class imcApp extends Component {

  constructor(props){
    super(props)
    this.state={
      altura:'',
      peso:'',
      textResult:'',
      numberResult:'',
    }
  }
   renderImc = (IMC) =>{
    console.log(IMC)
    if (IMC < 16) {
      console.log(IMC, 'caso 1')
          this.setState({textResult:'Magreza Grave'})
          this.setState({numberResult:IMC.toFixed(0)})
          this.setState({altura:''})
          this.setState({peso:''})
    }
    else if (IMC < 17) {
          this.setState({textResult:'Magreza moderada'})
          this.setState({numberResult:IMC.toFixed(0)})
          this.setState({altura:''})
          this.setState({peso:''})
    }
  
    else if (IMC < 18.5) {
          this.setState({textResult:'Magreza leve'})
          this.setState({numberResult:IMC.toFixed(0)})
          this.setState({altura:''})
          this.setState({peso:''})
    }
    else if (IMC < 25) {
          this.setState({textResult:'Saudável'})
          this.setState({numberResult:IMC.toFixed(0)})
          this.setState({altura:''})
          this.setState({peso:''})
    }
    else if (IMC < 30) {
          this.setState({textResult:'Sobrepeso'})
          this.setState({numberResult:IMC.toFixed(0)})
          this.setState({altura:''})
          this.setState({peso:''})  
    }
    else if (IMC < 35) {
          this.setState({textResult:'Obesidade grau 1'})
          this.setState({numberResult:IMC.toFixed(0)})
          this.setState({altura:''})
          this.setState({peso:''}) 
    }
    else if (IMC < 40) {
          this.setState({textResult:'Obesidade grau 2'})
          this.setState({numberResult:IMC.toFixed(0)})
          this.setState({altura:''})
          this.setState({peso:''})
    }
    else if (IMC > 40) {
      
          this.setState({textResult:'Obesidade grau 3'})
          this.setState({numberResult:IMC.toFixed(0)})
          this.setState({altura:''})
          this.setState({peso:''}) 
    }
  
  }
  onPress(){
    console.log(this.state)
    let IMC = 0
    this.setState({textResult:''})
    this.setState({numberResult:''})
    let peso = float(this.state.peso)
    let altura = float(this.state.altura)
   
    let alturaCM = altura / 100

    if(peso == 0 && altura == 0){
      this.setState({textResult:'Insira os dados'}), 
      this.setState({numberResult:0})   
      return
    }
    if (altura == 0 ){
      this.setState({textResult:'Insira a altura'}), 
      this.setState({numberResult:0}) 
      this.setState({altura:''})
      this.setState({peso:''})  
      return
    }
    if (peso == 0){
      this.setState({textResult:'Insira o peso'}), 
      this.setState({numberResult:0})   
      this.setState({altura:''})
      this.setState({peso:''}) 
      return
    }

    IMC = (peso / (alturaCM * alturaCM))

    this.renderImc(IMC)
    
  }
  render() {
    return (
      <View>
          <View style={styles.formContainer}>
            <FormItem 
            title='Peso' 
            placeholder='kg'
            onChangeText={(peso)=>this.setState({peso:peso})}
            text={this.state.peso}
            />
            <FormItem 
            title='Altura' 
            placeholder='cm'
            onChangeText={(alt)=>this.setState({altura:alt})}
            text={this.state.altura}
            />
          </View>
      <ButtonCalc onPress={()=>{this.onPress()}}/>
          <View style={styles.resultContainer}>
              <Text style={styles.numberResult}>{this.state.numberResult}</Text>
              <Text style={styles.textResult}>{this.state.textResult}</Text>
          </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#fff',
    marginTop:100,
    marginLeft:50,
  },
  resultContainer:{
    marginTop:70,
    alignItems:'center', 
  },
  textResult:{
    fontSize:20,
  },
  numberResult:{
    fontSize:50,
  }
});