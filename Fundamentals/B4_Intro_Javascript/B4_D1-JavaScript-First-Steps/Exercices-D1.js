//1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b definidas no começo com os valores que serão operados. Faça programas para:

//Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

// Programa 1:

// var a = Math.round(Math.random() * (100 - 1) + 1);
// var b = Math.round(Math.random() * (100 - 1) + 1);
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// 2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

//Programa 2:

// const a = Math.round(Math.random() * (100 - 1) + 1);
// const b = Math.round(Math.random() * (100 - 1) + 1);
// if (a > b) {
//     console.log('O maior numero encontrado foi da variavel "A" = ' + a);
// }else{
//     console.log('O maior numero encontrado foi da variavel "B" = ' + b);
// }

// 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

//Programa 3:

// const a = Math.round(Math.random() * (100 - 1) + 1);
// const b = Math.round(Math.random() * (100 - 1) + 1);
// const c = Math.round(Math.random() * (100 - 1) + 1);
// if (a > b) {
//     console.log('O maior numero encontrado foi da variavel "A" = ' + a);
// }else if (b > c) {
//     console.log ('O maior numero encontrado foi da variavel "B" = ' + b)
// }else{
//     console.log('O maior numero encontrado foi da variavel "C" = ' + c)
// }

// 4 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

//Programa 4:

// const numberGenerator = Math.random();
// var positiveOrNegative;

// if (numberGenerator > 0.6) {
//     positiveOrNegative = Math.floor(numberGenerator) + 1;
// }else if (numberGenerator < 0.6 && numberGenerator > 0.3) {
//     positiveOrNegative = Math.floor(numberGenerator);
// }else{
//     positiveOrNegative = Math.floor(numberGenerator) - 1;
// }

// console.log(positiveOrNegative)
// switch (positiveOrNegative) {
//     case 1:
//         console.log('Positive')
//     break;
//     case -1:
//         console.log('Negative')
//     break;
//     default:
//         console.log('Zero')
// }

// 5 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo.

// const firstAngle = Math.floor(Math.random() * (61 - 59) + 59);
// const secondAngle = Math.floor(Math.random() * (61 - 59) + 59);
// const thirthAngle = Math.floor(Math.random() * (61 - 59) + 59);

// var triangleOrNot = (firstAngle + secondAngle + thirthAngle);

// console.log(triangleOrNot);

// if (triangleOrNot === 180) {
//     console.log('Holy shit, this actually made a triangle!!');
// }else{
//     console.log("I'm not surprised");
// }

// 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
//Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

// const allPieces = ['King', 'Queen', 'Pawn', 'Bishop', 'Knight', 'Rook']
// const piecePickAutomaton = allPieces[Math.floor(Math.random() * allPieces.length)]
// console.log(piecePickAutomaton)

// switch (piecePickAutomaton) {
//     case 'King':
//         console.log('1 Square, all directions');
//     break;
//     case 'Queen':
//         console.log('All Squares (Max 8), all directions');
//     break;
//     case 'Pawn':
//         console.log('1 Square, Foward');
//     break;
//     case 'Bishop':
//         console.log('All Squares, Diagonals');
//     break;
//     case 'Knight':
//         console.log('3 Squares, 1 sideways, 2 foward');
//     break;
//     case 'Rook':
//         console.log('All Squares, Foward, Backwards, Left, Right');
//     break;
//     default:
//         console.log("Piece doesn't exist");
// }

// 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

//Programa 7:

// const note = Math.round(Math.random() * (100 - 1) + 1)
// var result = note

// console.log(result + "%")

// if (result >= 90) {
//     console.log("Parabéns, você recebeu um 'A' pela sua performance!")
// }else if (result < 90 && result >= 80) {
//     console.log("Parabéns, você recebeu um 'B' pela sua performance!")
// }else if (result < 80 && result >= 70) {
//     console.log("Se esforçe mais, você recebeu um 'C' pela sua performance...")
// }else if (result < 70 && result >= 60) {
//     console.log("Se esforçe mais, você recebeu um 'D' pela sua performance...")
// }else if (result < 60 && result >= 50) {
//     console.log("Mediocre, você recebeu um 'E' pela sua performance...")
// }else{
//     console.log("Volta pro fundamental... Você recebeu um 'E' pela sua performance...")
// }

// 8 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .

// const numba1 = Math.round(Math.random() * (100 - 1) + 1)
// const numba2 = Math.round(Math.random() * (100 - 1) + 1)
// const numba3 = Math.round(Math.random() * (100 - 1) + 1)
// console.log(numba1)
// console.log(numba2)
// console.log(numba3)

// if (numba1 % 2 === 0 || numba2 % 2 === 0 || numba3 % 2 === 0) {
//     console.log('Um deles é par?')
//     console.log(true)
// }else{
//      console.log('Um deles é par?')
//      console.log(false)
// }

// 9 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

//Programa 9:

// const numba1 = Math.round(Math.random() * (100 - 1) + 1)
// const numba2 = Math.round(Math.random() * (100 - 1) + 1)
// const numba3 = Math.round(Math.random() * (100 - 1) + 1)
// console.log(numba1)
// console.log(numba2)
// console.log(numba3)

// if (numba1 % 2 !== 0 || numba2 % 2 !== 0 || numba3 % 2 !== 0) {
//     console.log('Um deles é impár?')
//     console.log(true)
// }else{
//      console.log('Um deles é impár?')
//      console.log(false)
// }

// 10 - Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

//Programa 10 -

// const itemCost = Math.round((Math.random() * (1000 - 1) + 1)) * 0.2; /*Numero randomico entre 1 e 1000 com 20% adicionado*/

// console.log('Cost = ' + itemCost.toFixed(2));

// const sellValue = itemCost * 0.15 + itemCost; /*Valor de venda é igual ao custo do produto com 15% de lucro*/

// console.log('Selling Value = '+sellValue.toFixed(2));

// var profit = sellValue - itemCost; /*Lucro é igual ao valor de venda menos o custo do produto*/

// console.log('Profit = '+profit.toFixed(2));

// var thousandSells = profit.toFixed(2) * 1000; /*Lucro total após 100 vendas*/

// console.log('Revenue after one thousand sold = '+thousandSells.toFixed(2))

// 11 - Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

//Programa 11:

const salary = Math.random() * (6000 - 1100) + 1100;

console.log('Seu Salario Bruto é' + ' ' + salary.toFixed(2))

var INSS;

if (salary <= 1556.94) {
    INSS = salary - salary * 0.08;
    console.log('Seu INSS é de' + ' ' + (salary * 0.08).toFixed(2));
}else if (salary <= 2594.92 && salary > 1556.94) {
    INSS = salary - salary * 0.09;
    console.log('Seu INSS é de' + ' ' + (salary * 0.09).toFixed(2))
}else if (salary <= 5189.82 && salary > 2594.92) {
    INSS = salary - salary * 0.11;
    console.log('Seu INSS é de' + ' ' + (salary * 0.11).toFixed(2));
}else{
    INSS = salary - 570.88;
    console.log('Seu INSS é de 570,88 Reais')
}

var IR;

if (INSS <= 1903.98) {
    IR = INSS;
    console.log('Você está isento do imposto de renda'); 
}else if (INSS > 1903.98 && INSS <=2826.65) {
    IR = INSS - (INSS * 0.075 - 142.80);
    console.log('Seu IR é de' + ' ' + (INSS * 0.075 - 142.80).toFixed(2));
}else if (INSS > 2826.65 && INSS <= 3751.05) {
    IR = INSS - (INSS * 0.15 - 354.80);
    console.log('Seu IR é de' + ' ' + (INSS * 0.15 - 354.80).toFixed(2));
}else if (INSS > 3751.05 && INSS <= 4664.68) {
    IR = INSS - (INSS * 0.225 - 636.13);
    console.log('Seu IR é de' + ' ' + (INSS * 0.225 - 636.13).toFixed(2));
}else{
    IR = INSS - (INSS * 0.275 - 869.36);
    console.log('Seu IR é de' + ' ' + (INSS * 0.275 - 869.36).toFixed(2));
}
console.log('Seu sálario liquido será' + ' ' + IR.toFixed(2))