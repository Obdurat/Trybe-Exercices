// 1 - Dada uma matriz, transforme em um array.

const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

function flatten(arr) {
  // escreva seu código aqui
  return arr.reduce((acc, curr) => acc.concat(curr), []);
}

//   console.log(flatten(arrays));

const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//   2 - Crie uma string com os nomes de todas as pessoas autoras.

function reduceNames(arr) {
  // escreva seu código aqui
  return arr.reduce((acc, curr) => (acc += `${curr.author.name} `), "");
}

//   console.log(reduceNames(books));

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

function averageAge(arr) {
  // escreva seu código aqui
  return (
    arr.reduce((acc, curr) => {
      return (acc += curr.releaseYear - curr.author.birthYear);
    }, 0) / arr.length
  );
}
//   console.log(averageAge(books))

// 4 - Encontre o livro com o maior nome.

function longestNamedBook(arr) {
  // escreva seu código aqui
  return arr.reduce((acc, curr) => (curr.name.length > acc.length ? (acc = curr) : (acc = acc)), "");
}

//   console.log(longestNamedBook(books))

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA(arr) {
  // escreva seu código aqui
  return arr.reduce((acc, curr) => {
      return acc + curr.split('').reduce((acumulator, current) => {
        return current.toLowerCase() === 'a' ? acumulator + 1 : acumulator + 0;
      }, 0);      
  }, 0);
}

// console.log(containsA(names))

// 6. - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } .

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(arr1, arr2) {
    // escreva seu código aqui
    return arr1.map((element, index) => ({
        name: element,
        average: arr2[index].reduce((acc, curr) => {
            return (acc + curr);            
        }, 0) / arr2[index].length
    }));
  }

//   console.log(studentAverage(students, grades))