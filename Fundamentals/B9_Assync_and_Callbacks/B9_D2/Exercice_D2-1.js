// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const jokeCointainer = document.getElementById('jokeContainer');

const fetchJoke = async () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  try {
      const promise = await fetch(API_URL, myObject);
      const data = await promise.json();
      jokeCointainer.innerHTML = data.joke;
  } catch (error) {
      jokeCointainer.innerHTML = `${error}`
  }
};


window.onload = () => fetchJoke();