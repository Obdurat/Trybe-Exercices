function encode(str) {
  // seu código aqui
  const vowels = ["a", "e", "i", "o", "u"];
  str = str.toLowerCase();
  for (let i = 0; i < vowels.length; i += 1) {
    str = str.replace(`${vowels[i]}`, `${i + 1}`);
  }
  return str;
}

function decode(str) {
  // seu código aqui
  const vowels = ["a", "e", "i", "o", "u"];
  str = str.toLowerCase();
  for (let i = 0; i < vowels.length; i += 1) {
    str = str.replace(`${i + 1}`, `${vowels[i]}`);
  }
  return str;
}

function techList(arr, str) {
    if (arr.length == 0) {return 'Vazio!'}
    arr.sort();
    let output = [];
    for (let i = 0; i < arr.length; i += 1) {
        output.push({tech: `${arr[i]}`, name: `${str}`});
    } return output;
}

function hydrate(str) {
    let output = 0;
    str = str.replace(/\D/g, '');
    for (let i = 0; i < str.length; i += 1) {
        output += parseInt(str[i]);
    }
    if (output > 1) {return `${output} copos de água`} else {return `${output} copo de água`};
}

console.log(hydrate('1 2 cerveja'));

module.exports = {
    encode,
    decode,
    techList,
    hydrate,
}