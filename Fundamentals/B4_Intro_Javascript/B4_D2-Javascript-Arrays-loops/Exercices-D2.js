let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1- Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

// for (let print of numbers) {
//     console.log(print)
// }

// 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// let sum = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     sum += numbers[index];
// }
// console.log(sum)

// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

// let sum = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//      sum += numbers[index];
// }
// console.log(sum / numbers.length)

// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// let sum = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//       sum += numbers[index];
// }
// sum / numbers.length > 20 ? console.log('Valor maior que 20') : console.log('Valor menor ou igual a 20')

// 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;

// let biggest = 0;
// for (let index = 0; index - numbers.length; index += 1) {
//     if (biggest < numbers[index]) {
//         biggest = numbers[index]
//     }
// }console.log(biggest)

// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let odd = []
// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 !== 0) {
//         odd.push(numbers[index])
//     }else{
//         console.log('Impares ainda não encontrados. Procurando... ' + index + '0% concluido')
//     }
// }console.log(odd.length)

// 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;

// let lowest = 100;
// for (let index = 0; index - numbers.length; index += 1) {
//     if (lowest > numbers[index]) {
//         lowest = numbers[index]
//     }
// }console.log(lowest)

// 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

// var cria = []
// for (let index = 1; index <= 25; index += 1) {
//     cria.push(index)   
// }
// console.log(cria)

// // 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

// for (let index = 0; index < cria.length; index += 1) {
//     console.log(cria[index] / 2)
// }

// 10 - Ordene o array numbers em ordem crescente e imprima seus valores;

//let order = numbers.sort((a , b) => a - b )
//console.log(order)


// Ordene o array numbers em ordem decrescente e imprima seus valores;

//let order = numbers.sort((a, b) => b - a )
//console.log(order)

// Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:


let position1 = 0 
let position2 = 1
let next
let newArray = []
for (let multiplica = 0; multiplica < numbers.length; multiplica += 1) {
    if (!isNaN(numbers[position2])) {
        newArray.push(numbers[position1] * numbers[position2])
        }else{
            newArray.push(numbers[position1] * 2)
        };
    position1 = position2;
    position2 = position2 + 1;
} console.log(newArray)