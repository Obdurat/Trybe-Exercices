const skills = ['HTML', 'CSS', 'Javascript']

function findX(str, char) {
    let output = str.replace('x', char);             
    return output;
}

function addAdjectives(array, string) {
    let output = string
    for (let i = 0; i < array.length; i += 1) {
        output += ` ${array[i]}.`
    } return output
}

console.log(addAdjectives(skills, findX('Anderson tem x', 'estas skills:')));