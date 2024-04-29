/*Conversor de Moedas
Vamos criar um conversor de moedas. O usuário fornecerá o valor em uma determinada moeda e escolherá para qual moeda deseja converter. 
Vamos considerar as seguintes moedas: Real (BRL), Dólar Americano (USD), Euro (EUR) e Libra Esterlina (GBP).
 Vamos usar uma taxa de conversão fixa para simplificar.

const taxaUSD = 5.50

const taxaEUR = 6.50

const taxaGBP = 7.50

Obtenha do usuário os seguintes dados: valor a ser convertido, moeda origem, moeda destino.
 Verifique se a moeda destino e moeda origem são válidas: USD, EUR, GBP, BRL. Realize as conversões. Exiba os dados na tela*/


 const valor = parseFloat(prompt('Digite o valor a ser convertido:'));
 const moedaOrigem = prompt('Digite a moeda de origem (BRL, USD, EUR, GBP):');
 const moedaDestino = prompt('Digite a moeda de destino (BRL, USD, EUR, GBP):');
 
 if (moedaOrigem === 'BRL' && moedaDestino === 'USD') {
     window.alert('Valor convertido: ' + (valor * 5.50).toFixed(2) + ' USD');
 } else if (moedaOrigem === 'BRL' && moedaDestino === 'EUR') {
     window.alert('Valor convertido: ' + (valor * 6.50).toFixed(2) + ' EUR');
 } else if (moedaOrigem === 'BRL' && moedaDestino === 'GBP') {
     window.alert('Valor convertido: ' + (valor * 7.50).toFixed(2) + ' GBP');
 } else if (moedaOrigem === 'USD' && moedaDestino === 'BRL') {
     window.alert('Valor convertido: ' + (valor / 5.50).toFixed(2) + ' BRL');
 } else if (moedaOrigem === 'EUR' && moedaDestino === 'BRL') {
     window.alert('Valor convertido: ' + (valor / 6.50).toFixed(2) + ' BRL');
 } else if (moedaOrigem === 'GBP' && moedaDestino === 'BRL') {
     window.alert('Valor convertido: ' + (valor / 7.50).toFixed(2) + ' BRL');
 } else {
     window.alert('Moedas fornecidas são inválidas!');
 }