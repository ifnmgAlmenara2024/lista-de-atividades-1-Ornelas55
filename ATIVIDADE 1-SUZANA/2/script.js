/*Calculadora de Área de um Retângulo
Crie um programa que calcule a altura de um retângulo. Solicite ao usuário a base e a altura de um retângulo. Calcule a área do retângulo usando a fórmula: área = base * altura. 
Use variáveis do tipo let para armazenar a base e a altura, e const para armazenar a área. Mostre o resultado final na tela.*/

let base = parseFloat(window.prompt("Base do retangulo: "));

let altura = parseFloat(window.prompt("Altura do rentagulo"));

const formula = base * altura;

window.alert("A area do retangulo é: " +formula);



