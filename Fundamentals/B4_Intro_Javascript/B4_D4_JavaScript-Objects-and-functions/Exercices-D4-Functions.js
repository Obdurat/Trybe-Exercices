// Samuca

// let arrayQualquer = []
// function addNumbers(...param) {
// for (let index = 0; index < param.length; index += 1) {
//     return 'Este array já contem os valores ' + param.join(', ')
// }
// for (let index = 0; index === param.length; index +=1) {
//     if (index === 10) {
//         break;
//     }else{
//         param.push(Math.floor(Math.random() * (11 - 1)))
//     }    
// }return param

// }console.log(addNumbers(...arrayQualquer))

//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

// let string = 'arara'
// function palindrome(str) {
//     let original = str.split('');    
//     let compare = str.split('').reverse();

//     for (let index = 0; index < original.length; index += 1){
//         if (original[index] != compare[index]) {
//             return 'Não é um Palindromo'
//         }                
//     }return 'É um palindromo!'    
// }console.log(palindrome(string))

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valo

// let array = [22, 3, 6, 7, 10, 1]
// function biggest(...array) {
//     let biggestFound = 0;    
//     for (let index = 1; index <= array.length; index += 1) {        
//         if (array[index -1] > biggestFound) {
//             biggestFound = array[index - 1];        
//         }else if (array[index] > biggestFound){
//             biggestFound = [array.index]
//         }
//     }return array.indexOf(biggestFound)
// }console.log(biggest(...array))

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// let array = [22, 3, 6, 7, 10, 1, 0, -1, 11]
// function lowest(...array) {
//     let lowestFound = 0;    
//     for (let index = 1; index <= array.length; index += 1) {        
//         if (array[index -1] < lowestFound) {
//             lowestFound = array[index - 1];        
//         }else if (array[index] < lowestFound){
//             lowestFound = [array.index]
//         }
//     }return array.indexOf(lowestFound)
// }console.log(lowest(...array))

//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
// function biggestNumberOfLetters(...param) {
//     let biggestNameFound = '';
//     for (let index = 1; index < param.length; index += 1) {
//         if (param[index - 1].length > biggestNameFound.length) {
//             biggestNameFound = param[index - 1];
//         } else if (param[index].length > biggestNameFound.length) {
//             biggestNameFound = param[index]
//         }
//     } return biggestNameFound
// } console.log(biggestNumberOfLetters(...array))

//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// let array = [2, 3, 2, 5, 8, 2, 3];
// function mostRepeated(...param) {
//     let repeated = ''
//     let count = 1
//     let orderedCopy = param.sort();
//     for (let index = 1; index < param.length; index += 1) {
//         if (orderedCopy[index -1] === orderedCopy[index]) {
//             count += 1
//             repeated += `${param[index]} repeated ${count} times\n`
//         } else {
//             count = 1
//         }
//     } return repeated          
// }console.log(mostRepeated(...array))

