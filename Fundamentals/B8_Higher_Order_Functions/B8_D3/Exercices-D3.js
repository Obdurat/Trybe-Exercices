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

// Adicione o código do exercício aqui:

// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

function formatedBookNames(arr) {
  // escreva seu código aqui
  return arr.map((element) => {
    return `${element.name} - ${element.genre} - ${element.author.name}`;
  });
}

// console.log(formatedBookNames(books));

// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado.

function nameAndAge(arr) {
  // escreva seu código aqui
  return arr
    .map((element) => {
      return {
        age: element.releaseYear - element.author.birthYear,
        author: `${element.author.name}`,
      };
    })
    .sort((a, b) => (a.age > b.age ? 1 : b.age > a.age ? -1 : 0));
}

// console.log(nameAndAge(books));

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

function fantasyOrScienceFiction(arr) {
  // escreva seu código aqui
  return arr.filter((element) => {
    return element.genre == "Ficção Científica" || element.genre == "Fantasia";
  });
}

// console.log(fantasyOrScienceFiction(books));

// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

function oldBooksOrdered(arr) {
  // escreva seu código aqui
  let thisYear = `${new Date().getFullYear()}`;
  return arr
    .filter((element) => {
      return thisYear - element.releaseYear >= 60;
    })
    .sort((a, b) =>
      a.releaseYear > b.releaseYear ? 1 : b.releaseYear > a.releaseYear ? -1 : 0
    );
}
//   console.log(oldBooksOrdered(books));

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

function fantasyOrScienceFictionAuthors(array) {
  // escreva seu código aqui
  let fantasyOrScience = fantasyOrScienceFiction(array);
  fantasyOrScience = fantasyOrScience.map(
    (element) => `${element.author.name}`
  );
  return fantasyOrScience.sort();
}

//   console.log(fantasyOrScienceFictionAuthors(books));

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

function oldBooks(arr) {
    // escreva seu código aqui
    let oldNovels = oldBooksOrdered(arr);
    oldNovels = oldNovels.map(element => `${element.name}`);
    return oldNovels;
  }

//   console.log(oldBooks(books));

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

function authorWith3DotsOnName(arr) {
    // escreva seu código aqui
    return arr.find(element => element.author.name.match(/\w\.\s\w\.\s\w\./g)).name;    
  }
//   console.log(authorWith3DotsOnName(books));