// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .

// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

// const testingScope = (scope) => {
//     if (scope === true) {
//         var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//         ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//         console.log(ifScope);
//     } else {
//         var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//         console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }
// testingScope(false);

// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

// const something = (array) => {
//     array.sort((a, b) => a - b);
//     let next = 0;
//     let odds = [];
//     let evens = [];
//     while (next < array.length) {
//         array[next] % 2 === 0 ? evens.push(array[next]) : odds.push(array[next]);
//         next += 1;
//     } next = 0;
//     return `Odds: ${odds.join(',')} Evens: ${evens.join(',')}`;
// };

// console.log(something(oddsAndEvens)); // será necessário alterar essa linha 😉

// Crie uma função que receba um número e retorne seu fatorial.

// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

// function factorial(x) {
//     if (x == 0) {
//         return 1;
//     } else {
//         return x * factorial(x - 1)
//     }
// }

// console.log(factorial(9));

// Crie uma função que receba uma frase e retorne qual a maior palavra.

// function longestWord(str) {
//   let separateWords = str.split(" ");
//   let next = 0;
//   let longest = '';
//   while (next < separateWords.length) {
//     longest.length < separateWords[next].length ? longest = separateWords[next] : longest = longest; 
//       next += 1;
//     }
//     next = 0;
//     return longest;
//   }

// console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
