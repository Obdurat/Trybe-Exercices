var between = Math.round(Math.random() * (24 - 4) + 4);
const currentHour = between
var message = ""
currentHour >= 22 ? message = "Não deveríamos comer nada, é hora de dormir" : currentHour >= 18 && currentHour < 22 ? message = "Rango da noite, vamos jantar :D" : currentHour >= 14 && currentHour < 18 ? message = "Vamos fazer um bolo pro café da tarde?" : currentHour >= 11 && currentHour <= 14 ? message = "Hora do almoço!!!" : currentHour <= 11 && currentHour >= 4 ? message = "Hmmm, cheiro de café recém passado" : message = "VAI DORMIR"
console.log(currentHour)
console.log(message)