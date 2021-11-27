var weekDay = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sabado", "domingo"]
var todayIs = weekDay[Math.floor(Math.random() * weekDay.length)] 
console.log(todayIs)
todayIs == weekDay[0] || todayIs == weekDay[1] || todayIs == weekDay[2]|| todayIs == weekDay[3]|| todayIs == weekDay[4] ? console.log("Oba, mais um dia de aprendizado na Trybe >:D") : console.log("FINALMENTE, descanso merecido UwU")




