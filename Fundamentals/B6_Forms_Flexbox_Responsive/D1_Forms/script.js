window.onload = () => {
  const state = document.getElementById("input-state");

  const date = document.getElementById("initial-date");

  const sendBtn = document.getElementById("send-btn");

  const modalCard = document.getElementById("modal-card");

  const modalBtnSave = document.getElementById("modal-btn-save");

  const modalBtnCancel = document.getElementById("modal-btn-cancel");

  const modalContent = document.getElementById("modal-content");

  const modalBtnClose = document.getElementById("modal-btn-close");

  const successContainer = document.getElementById("success-container");

  const inputCpf = document.getElementById("input-cpf")

  const closeSuccess = document.getElementById('close-success');

  let childs = 0;  

  let currentYear = new Date().getFullYear();

  closeSuccess.addEventListener("click", () => {
    successContainer.style.bottom = "-20vh";
  });

  inputCpf.addEventListener("blur", (event) => {
    var Soma;
    var Resto;
    Soma = 0;   
    // strCPF  = RetiraCaracteresInvalidos(strCPF,11);
    if (event.target.value === "") {
      event.target.classList.add("is-danger");
      event.target.placeholder = "CPF Obrigatório";      
      event.target.value = "";
      return;      
    }
    if (event.target.value == "00000000000") {
      alert("CPF Inválido");
      event.target.value = "";
      return;      
    }
    for (let i = 1; i <= 9; i += 1) {
      Soma = Soma + event.target.value.substring(i-1, i) * (11 - i);      
    }
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11)) {
      Resto = 0;
    } 
    if (Resto != event.target.value.substring(9, 10)) {
      alert("CPF Inválido");
      event.target.value = "";
      return;
    }
	Soma = 0;
    for (let i = 1; i <= 10; i += 1) {
      Soma = Soma + event.target.value.substring(i-1, i) * (12 - i);
    }
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11)) {
      Resto = 0;
    } 
    if (Resto != event.target.value.substring(10, 11)) {
      alert("CPF Inválido");
      event.target.value = "";
      return;
    }
    let cpfFormater = [];
    for (let index = 0; index < event.target.value.length; index += 1) {
      cpfFormater.push(event.target.value[index]);      
    }    
    event.target.value = "";
    cpfFormater.splice(3, 0, ".");
    cpfFormater.splice(7, 0, ".");
    cpfFormater.splice(11, 0, "-");
    event.target.value = `${cpfFormater.join("")}`
});    

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
      
    const inputs = document.getElementsByTagName("input");
    modalContent.innerHTML = "";
    for (let i = 0; i < inputs.length; i += 1) {
      if (inputs[i].value == "") {
        window.confirm("Preencha Todos os campos Obrigatórios!");
        return;
      }
      if (modalContent.children.length == 10) {
        modalContent.appendChild(document.createElement("h3")).innerText = `${state.name}:`;
        modalContent.appendChild(document.createElement("p")).innerText = `${state.value}`;
      } else if (inputs[i].type !== "radio") {
        modalContent.appendChild(document.createElement("h3")).innerText = `${inputs[i].placeholder}:`;
        modalContent.appendChild(document.createElement("p")).innerText = `${inputs[i].value}`;
      } else if (inputs[i].type == "radio" && inputs[i].checked) {
        modalContent.appendChild(document.createElement("h3")).innerText = `${inputs[i].placeholder}:`;
        modalContent.appendChild(document.createElement("p")).innerText = `${inputs[i].value}`;
      }
      for (let j = 0; j < modalContent.children.length; j += 2) {
        modalContent.children[j].className += "subtitle is-5 mb-0 mt-2";
      }
    }

    modalCard.classList.add("is-active");
  });

  modalBtnSave.addEventListener("click", () => {
    modalBtnSave.classList.add("is-loading")
    setTimeout(() => {
      modalCard.classList.remove("is-active"); 
      modalBtnSave.classList.remove("is-loading");
      successContainer.style.bottom = "0vh";
    }, 2000);
    setTimeout(() => {      
      successContainer.style.bottom = "-20vh";
    }, 6500);
  });

  modalBtnCancel.addEventListener("click", () => {
    modalCard.classList.remove("is-active");
  });

  modalBtnClose.addEventListener("click", () => {
    modalCard.classList.remove("is-active");
  });

  const states = [
    "",
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
