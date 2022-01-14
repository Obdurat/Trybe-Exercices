const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

function addPeriod(obj, key, period) {
  let output = obj;
  output[`${key}`] = `${period},`;
  return output;
}

addPeriod(lesson2, "turno", "noite");

function listKeys(obj) {
  return Object.keys(obj);
}

function objectSize(obj) {
  return Object.keys(obj).length;
}

function objectValues(obj) {
  return Object.values(obj);
}

const allLessons = {};

function concatLessons(target, obj, key) {
  target[`${key}`] = Object.assign({}, obj);
  return target;
}

concatLessons(allLessons, lesson1, "lesson1");
concatLessons(allLessons, lesson2, "lesson2");
concatLessons(allLessons, lesson3, "lesson3");

function getStudents(obj) {
  let output = 0;
  for (let i = 0; i < objectSize(obj); i += 1) {
    output += objectValues(obj)[i].numeroEstudantes;
  }
  return output;
}

function verifyPair(obj, key, value) {
  if (Boolean(obj[`${key}`] === value)) {
    return true;
  } return false;
}

// Bonus

function countStudentsByLesson(obj, lesson) {
    let output = 0
    for (let i = 0; i < objectSize(obj); i += 1) {
        if (objectValues(obj)[i].materia === `${lesson}`) {
            output += objectValues(obj)[i].numeroEstudantes;
        };
    }; return `${output}`;
};

function createReport(obj, professor) {
    let report = {};
    for (let i = 0; i < objectSize(obj); i += 1) {
        if (objectValues(obj)[i].professor === `${professor}`) {
            report['professor'] = `${professor}`
            report['aulas'] = `${objectValues(obj)[i].materia}`
            report['estudantes'] = countStudentsByLesson(obj, objectValues(obj)[i].materia)
        } return report
    }
}

// console.log(addPeriod(lesson2, 'turno', 'noite'));
// console.log(listKeys(lesson2));
// console.log(objectSize(lesson1));
// console.log(objectValues(lesson3));
// console.log(allLessons);
// console.log(getStudents(allLessons));
// console.log(verifyPair(lesson3, 'turno', 'noite'));
// console.log(countStudentsByLesson(allLessons, 'Matemática'));
// console.log(createReport(allLessons, 'Maria Clara'))
