window.onload = () => {
  const state = document.getElementById("input-state");

  const date = document.getElementById("initial-date");

  const sendBtn = document.getElementById("send-btn");

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

  sendBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const main = document.getElementsByTagName("main");
    const inputs = document.getElementsByTagName("input");
    main[0].appendChild(document.createElement("div"));
    main[0].children[1].innerText = "";
    while (childs < inputs.length) {
      main[0].children[1].innerText += inputs[childs].value;
      main[0].children[1].appendChild(document.createElement('br'));      
      childs += 1;
    } childs = 0;
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
