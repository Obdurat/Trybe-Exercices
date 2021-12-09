function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.   

function dayOfMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    const monthDay = document.querySelector('#days');    
    
    for (let index = 0; index < dezDaysList.length; index += 1){                     
        monthDay.appendChild(document.createElement('li'));

        monthDay.childNodes[index + 1].innerHTML = dezDaysList[index];
        
        if (dezDaysList[index] == 25) {
            monthDay.childNodes[index + 1].className = 'day holiday fryday'
        } else if (dezDaysList[index] == 24 || dezDaysList[index] == 31) {
            monthDay.childNodes[index + 1].className = 'day holiday'
        } else if (dezDaysList[index] == 4 || dezDaysList[index] == 11 || dezDaysList[index] == 18) {
            monthDay.childNodes[index + 1].className = 'day fryday'
        }else {
            monthDay.childNodes[index + 1].className = 'day'
        }
    }
}
dayOfMonth()

let buttonText = 'Holidays'
function addButton(str) {

    const buttonsContainer = document.querySelector('.buttons-container');
    
    buttonsContainer.appendChild(document.createElement('button'));

    buttonsContainer.childNodes[1].innerText = str;

    buttonsContainer.childNodes[1].id = "btn-holiday";
}
addButton(buttonText);

let buttonHoliday = document.querySelector('#btn-holiday');
buttonHoliday.addEventListener('click', recebeClick);

function recebeClick() {

    let holidays = document.querySelectorAll('.holiday')

    for ( let index = 0; index < holidays.length; index += 1) {
        
        if (holidays[index].style.background == 'rgb(255, 127, 127)') {

            holidays[index].style.background = "rgb(238,238,238)"

        } else {

            holidays[index].style.background = 'rgb(255, 127, 127)';

        }       
    }    
}

function addButtonFriday(str) {

    const buttonsContainer = document.querySelector('.buttons-container');
    
    buttonsContainer.appendChild(document.createElement('button'));

    buttonsContainer.childNodes[2].innerText = str;

    buttonsContainer.childNodes[2].id = "btn-friday";    
}

addButtonFriday('Friday');

let buttonFriday = document.querySelector('#btn-friday');
buttonFriday.addEventListener('click', friday);

function friday() {

    let fridays = document.querySelectorAll('.fryday')

    for ( let index = 0; index < fridays.length; index += 1) {
        
        if (fridays[index].style.background == 'rgb(144, 238, 144)') {

            fridays[index].style.background = "rgb(238,238,238)"

        } else {

            fridays[index].style.background = 'rgb(144, 238, 144)';

        }       
    }    
}

function addEvent() {
    let days = document.getElementsByClassName('day');

    for (let index = 0; index < days.length; index += 1) {
        days[index].addEventListener('mouseenter', zoom)
        days[index].addEventListener('mouseleave', unzoom)
    }
}
// let daysContainer = document.querySelector('.days');

//     daysContainer.addEventListener('mouseover', zoom);
//     daysContainer.addEventListener('mouseout', unzoom);



function unzoom(origin) {
    console.log(origin.target);
    origin.target.style.transform = 'scale(1)';
    origin.target.style.background = ''
}

function zoom(origin) {
    console.log(origin.target);  
    origin.target.style.transform = 'scale(1.6)';
           
}
addEvent()

function addTask() {

    let inputBtn = document.getElementById('btn-add');
    inputBtn.addEventListener('mousedown', task);
    let taskList = document.querySelector('.my-tasks');
    taskList.appendChild(document.createElement('ul'));
    taskList.children[1].id = 'task-ul'
}

function task(origin) {
    console.log(origin.target)
    let taskList = document.querySelector('.my-tasks');

    let inputIn = document.querySelector('#task-input');

    let ul = taskList.children[1];    
    
    ul.style.padding = '0'

    ul.appendChild(document.createElement('li'));

    for (let index = 0; index < ul.children.length; index += 1) {
        if (ul.children[index].innerText == ''){
            ul.children[index].innerText = inputIn.value;
            ul.children[index].classList.add('task-item');
        }
    } inputIn.value = ''    
}

addTask();
