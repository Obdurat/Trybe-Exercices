// 1 -

// const newEmployees = (call) => {
//   const employees = {
//     id1: call('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: call('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: call('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   };
//   return employees;
// };

// const lof = (name) => ({nome: name, Email: `${name.replace(' ', '').toLowerCase()}@job.com`});

// console.log(newEmployees(lof));

// 2 -

// const checkGame = (bet ,call) => {    
//     if (call == bet) {return 'Parabéns, você venceu!'} return 'YOU SUCK!'
// };

// const game = (n) => {
//     return Math.floor(Math.random() * (n - 1) + 1);
// };

// console.log(checkGame(4, game(5)));

// 3 -

// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
// let count = 0;

// const whyIamaHof = (arr, arr2, call) => {
//     for (let i = 0; i < arr.length; i += 1) {
//         if (arr[i] == arr2[i]) { call.add(1); } else if (arr2[i] == 'N.A') { continue; } else { call.sub(.5) }
//     }
//     return count;   
// };

// const whyAmIDoingThis = {add: (n) => count += n, sub: (n) => count -= n};

// console.log(whyIamaHof(RIGHT_ANSWERS, STUDENT_ANSWERS, whyAmIDoingThis));
