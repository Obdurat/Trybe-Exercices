// Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

function addKey(obj, newkey, value) {
    let output = obj;    
    output[`${newkey}`] = value;
    return output;
}

const abj = {
    a: 9,
    b: 5,
    c: 6,
}

console.log(!isNaN(''));