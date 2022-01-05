window.onload = () => {
  const state = document.getElementById("input-state");

  const date = document.getElementById("initial-date");

  let childs = 0;

  let currentYear = new Date().getFullYear();

  date.addEventListener("keyup", () => {
    if (date.value.length == 2) {
      if (date.value > 31 || date.value <= 0) {
        alert("Data Incorreta!!");
        date.value = "";
        return;
      }
      date.value = date.value + "/";
    } else if (date.value.length == 5) {
      if (date.value.slice(-2) > 12 || date.value.slice(-2) < 1) {
        alert("Data Incorreta!!");
        date.value = "";
        return;
      }
      date.value = date.value + "/";
    } else if (date.value.length == 10) {
      if (currentYear - date.value.slice(-4) > 100) {
        alert("Data Invalida!!");
        date.value = "";
        return;
      }
    }
  });

  const states = [    
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espírito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Minas Gerais",
    "Paraná",
    "Paraíba",
    "Pará",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondonia",
    "Roraima",
    "Santa Catarina",
    "Sergipe",
    "São Paulo",
    "Tocantins",
  ];

  while (childs < states.length) {
    state.appendChild(document.createElement("option"));
    state.children[childs].innerText = `${states[childs]}`;
    state.children[childs].value = `${states[childs]}`;
    state.children[childs].className = "selection-state";
    childs += 1;
  }
  childs = 0;
};
