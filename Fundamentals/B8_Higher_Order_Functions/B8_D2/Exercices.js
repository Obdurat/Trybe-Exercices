const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

function authorBornIn1947() {
    // escreva aqui o seu código
    const book1947 = books.find(element => element.author.birthYear === 1947);
    return book1947.author.name;
  }

//   console.log(authorBornIn1947());

//   2 - Retorne o nome do livro de menor nome.

function smallerName(arr) {
    let nameBook = books[0].name;
    // escreva aqui o seu código
    arr.forEach(element => {        
        nameBook.length > element.name.length ? nameBook = element.name : nameBook = nameBook;                
    });  
    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
  }

//   console.log(smallerName(books));

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

function getNamedBook(arr) {
    // escreva seu código aqui
    const bookWith26chars = arr.find(element => element.name.length === 26);
    return bookWith26chars;   
  }

//   console.log(getNamedBook(books))

// 4 - Ordene os livros por data de lançamento em ordem decrescente.

function booksOrderedByReleaseYearDesc(arr) {
    // escreva aqui seu código
    return arr.sort((a, b) => {
        if (a.releaseYear < b.releaseYear) return 1;
        return -1
    });
  }

//   console.log(booksOrderedByReleaseYearDesc(books));

// 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

function everyoneWasBornOnSecXX(arr) {
    // escreva seu código aqui
    return arr.every((element) => {
        element.author.birthYear > 1901
    });
  }

//   console.log(everyoneWasBornOnSecXX(books));

// 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.

function someBookWasReleaseOnThe80s(arr) {
  // escreva seu código aqui
  return arr.some((element) => {      
     if (element.releaseYear >= 1980 && element.releaseYear <= 1990) { return true; } return false; 
  });
}

// console.log(someBookWasReleaseOnThe80s(books));

//  7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

function authorUnique(arr) {
    // escreva seu código aqui
    let birth = [];
    arr.forEach(element => {        
        birth.push(element.author.birthYear);
    });
    birth.sort((a, b) => a - b);
    let i = 0;
    for (year of birth) {
        if (year == birth[i + 1]) { return false; } i++ } 
    return true   
}

// console.log(authorUnique(books))
