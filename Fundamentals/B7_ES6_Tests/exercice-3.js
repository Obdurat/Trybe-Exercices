const button =  document.getElementById('btn');
const counter = document.getElementById('counter');

button.addEventListener('click', () => {
    counter.innerText = `${parseInt(counter.innerText, 10) + 1}`
});