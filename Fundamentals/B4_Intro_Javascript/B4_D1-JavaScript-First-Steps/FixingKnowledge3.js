var nota = Math.round(Math.random() * (100 - 1) + 1);
console.log(nota);
nota >= 80 ? console.log('Parabéns, você foi aprovado')
: (nota < 80 && nota >= 60) ? console.log('Você está na nossa lista de espera.')
: console.log('You Suck!!')
