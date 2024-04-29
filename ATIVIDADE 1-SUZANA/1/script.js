/*Calculadora de IMC (Índice de Massa Corporal)
Implemente um programa utilizando JavaScript que seja uma Calculadora de IMC (Índice de Massa Corporal): Solicite ao usuário o peso (em kg) e a altura (em metros). Calcule o IMC usando a fórmula: imc = peso / (altura * altura).

Mostre o resultado final na tela de acordo com a tabela

Abaixo de 18.5 Abaixo do peso:

18.5 - 24.9 Peso normal

25.0 - 29.9 Sobrepeso

30.0 - 34.9 Obesidade grau I

35.0 - 39.9 Obesidade grau II (severa)

Maior ou igual a 40.0 Obesidade grau III (mórbida)*/

let peso = parseFloat(window.prompt("Digite seu peso: "));

let altura = parseFloat(window.prompt("Digite sua altura: "));

imc = peso / (altura * altura);

if( imc < 18.5){
    window.alert("ABAIXO DO PESO!!!");
}
else if(imc > 18.5 && imc < 24.9){
    window.alert("PESO NORMAL!!");
}
else if(imc > 25 && imc < 29.9){
    window.alert("SOBREPESO!!!");
}
else if(imc > 30 && imc < 34.9){
    window.alert("OBESIDADE GRAU I");
}
else if(imc > 35 && imc < 39.9 ){
    window.alert("OBESIDADE GRAU II");
}
else{
    window.alert("OBESIDADE GRAU III");
}