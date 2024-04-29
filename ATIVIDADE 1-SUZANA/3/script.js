/*Conversor de Temperaturas
Crie um programa conversor de temperaturas. Solicite ao usuário uma temperatura em Celsius. 
Converta essa temperatura para Fahrenheit usando a fórmula: F = (C * 9/5) + 32. Mostre o resultado final na tela.*/

let tem_celsius = parseFloat(window.prompt("Digite a temperatura em Celsius"));

temp_Fahrenheit = (tem_celsius * 9 / 5) + 32;

window.alert("A temperatura em Fahrenheit é: " + temp_Fahrenheit);


