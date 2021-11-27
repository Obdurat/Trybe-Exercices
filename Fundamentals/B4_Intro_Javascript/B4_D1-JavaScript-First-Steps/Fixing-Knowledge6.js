var candidateState;
var possibilities = ['Aprovada', 'Lista', 'Reprovada', 'Não Encontrado']
candidateState = possibilities[Math.floor(Math.random() * possibilities.length)];
console.log(candidateState)

switch (candidateState) {
    case 'Aprovada':
        console.log('Parabéns, você passou no processo seletivo')
        break;
    case 'Lista':
        console.log('Não se desanime, você está na nossa lista de espera')
        break;
    case 'Reprovada':
        console.log('Infelizmente, você não passou no nosso processo selectivo.')
        break;
    default: console.log('Sua tentativa ainda está sendo analizada.')
}
