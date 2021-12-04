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

//Pegue cada um dos exercícios de 1 a 5 do final do dia 4.1 e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções.

//1

// function numberGenerator() {
//     return Math.random()
// }
// function plus(a, b) {
//     return a + b
// }
// function minus(a, b) {
//     return a - b
// }
// function multiply(a, b) {
//     return a * b
// }
// function divide(a,b) {
//     return a / b
// }
// function mod(a,b) {
//     return a % b
// }

//2

// function biggest(a, b) {
//     if (a > b) {
//         return 'O maior numero encontrado foi o primeiro = ' + a;
//     }else {
//         return 'O maior numero encontrado foi o segundo = ' + b;
//     }
// }console.log(biggest(3, 2))

//3 

// function biggestOfThree(a, b, c) {

//     if (a > b) {
//         return 'O maior numero encontrado foi do primeiro numero = ' + a;
//     } else if (b > c) {
//         return 'O maior numero encontrado foi do segundo numero = ' + b;
//     } else {
//         return 'O maior numero encontrado foi do terceiro numero = ' + c;
//     }
// } console.log(biggestOfThree(10, 9, 5))

//4

// function positiveOrNegative(n) {    
//     if (n >= 1) {
//         return 'Positive'        
//     }else if (n <= -1) {
//         return 'Negative'        
//     }else{
//         return 'Zero'
//     }
// }console.log(positiveOrNegative(0 +3))

//5

// function triangleOrNot(a, b, c) {

//     if (a + b + c === 180) {
//         return 'Holy shit, this actually made a triangle!!';
//     } else {
//         return "I'm not surprised";
//     }
// }console.log(triangleOrNot(59, 60, 61))