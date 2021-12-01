//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

// let n = 5
// for (index = 0; index <= n; index += 1) {
//     console.log("*****")
// }

// 2 - Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

// let n = 5
// let print = '*'
// for (index = 0; index < n; index += 1) {
//     console.log(print)
//     print += '*'
// }

// 3 - Agora inverta o lado do triângulo.

// let n = 5
// let star = '*'
// let space = '\xa0'
// let result = ''
// let count = 5; 

// for (let line = 0;line < n; line += 1) {
//   for (let colum = 0; colum <= n; colum += 1) {
//     if (colum === count) {
//       result += star + star.repeat(line)            
//     }else {
//       result += space      
//     }
//   }  
//   count -= 1
//   console.log(result)
//   result = ''
// }

//4 - Depois, faça uma pirâmide com n asteriscos de base:

// let n = 5
// let star = '*'
// let space = ''

// for (var colum = 0; colum < Math.floor(n / 2); colum += 1) {
//     space += '\xa0'    
// }

// console.log(space + star);
// space = '';

// for (let index = 1; index < Math.floor(n / 2); index += 1) {
//     space += '\xa0'
// }
// console.log(space + star.repeat(colum + 1));
// console.log(star.repeat(n))



// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

// let n = 7;
// let star = '';
// let space = '';
// for(let i = 0; i<Math.floor(n/2); i +=1){
//     space+='\xa0';
// }

// for (let index = 0; index < Math.floor(n/2); index +=1 ){
//     if(index==0) star+='*'; else star+=' *';
//     console.log(space + star);
//     space=space.slice(0, -1);
//     if(index!=0) star = star.slice(0, -1) + ' ';
// }
// star=''
// for(let ultimate = 1; ultimate <= n; ultimate+=1) star+='*';
//     console.log(star);

// 6 - Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

// let input = 77
// let divisors = []

// for (let count = 0; count < input; count += 1) {
//     if (count !== 1 && input !== count && input % count === 0) {
//         divisors.push(count)        
//     }
// }
// if (divisors.length > 0) {
//     console.log('Não é primo, ele é divisivel por:\xa0' + divisors.join(',\xa0'))
// }else{
//     console.log(input + '\xa0 é Primo')
// }