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
  if (arr.length == 0) {
    return "Vazio!";
  }
  arr.sort();
  let output = [];
  for (let i = 0; i < arr.length; i += 1) {
    output.push({ tech: `${arr[i]}`, name: `${str}` });
  }
  return output;
}

function hydrate(str) {
  let output = 0;
  str = str.replace(/\D/g, "");
  for (let i = 0; i < str.length; i += 1) {
    output += parseInt(str[i]);
  }
  if (output > 1) {
    return `${output} copos de água`;
  } else {
    return `${output} copo de água`;
  }
}

const professionalBoard = [
  {
    id: "8579-6",
    firstName: "Ana",
    lastName: "Gates",
    specialities: ["UX", "Design"],
  },
  {
    id: "5569-4",
    firstName: "George",
    lastName: "Jobs",
    specialities: ["Frontend", "Redux", "React", "CSS"],
  },
  {
    id: "4456-4",
    firstName: "Leila",
    lastName: "Zuckerberg",
    specialities: ["Context API", "RTL", "Bootstrap"],
  },
  {
    id: "1256-4",
    firstName: "Linda",
    lastName: "Bezos",
    specialities: ["Hooks", "Context API", "Tailwind CSS"],
  },
  {
    id: "9852-2-2",
    firstName: "Jeff",
    lastName: "Cook",
    specialities: ["Ruby", "SQL"],
  },
  {
    id: "4678-2",
    firstName: "Paul",
    lastName: "Dodds",
    specialities: ["Backend"],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
  for (let i = 0; i < professionalBoard.length; i += 1) {
    if (professionalBoard[i].id == id) {
      if (professionalBoard[i][`${detail}`]) {
        return professionalBoard[i][`${detail}`];
      } else {
        throw new Error("Informação indisponível");
      }
    }
  } throw new Error('ID não identificada');
};

module.exports = {
  encode,
  decode,
  techList,
  hydrate,
  searchEmployee,
};
