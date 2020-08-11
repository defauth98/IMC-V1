export default function textResult(IMC) {
  if (IMC < 16) {
    return "Magreza Grave";
  } else if (IMC < 17) {
    return "Magreza moderada";
  } else if (IMC < 18.5) {
    return "Magreza leve";
  } else if (IMC < 25) {
    return "Saudável";
  } else if (IMC < 30) {
    return "Sobrepeso";
  } else if (IMC < 35) {
    return "Obesidade grau 1";
  } else if (IMC < 40) {
    return "Obesidade grau 2";
  } else if (IMC > 40) {
    return "Obesidade grau 3";
  }
}
