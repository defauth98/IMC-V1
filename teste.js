let IMC = 0
let resultadoText = ''

IMC = 24

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

