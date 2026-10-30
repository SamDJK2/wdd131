const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`; 
}
const stepsHtml = steps.map(listTemplate); 

document.querySelector("#myList").innerHTML = stepsHtml.join(""); 

const letters = ["A", "B", "F"]; 
const initial_gpa = 0;

function gpa_calc(letter) {
  const letter_key = {"A": 4, "B": 3, "C": 2, "D": 1, "F": 0};
  if (letter_key.hasOwnProperty(letter)) {
    return letter_key[letter];
  } else {
    return 0;
  }
}

const gpaPoints = letters.map(gpa_calc);
console.log(gpaPoints); 

const gpaSum = gpaPoints.reduce((total, current_gpa) => total + current_gpa, initial_gpa);
console.log(gpaSum); 

const gpaTotal = gpaSum / gpaPoints.length;
console.log(gpaTotal); 

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const shortFruits = fruits.filter((fruit) => fruit.length < 6);
console.log(shortFruits); 

const nums = [12, 34, 21, 54];
const luckyNum = 21;
let luckyIndex = nums.indexOf(luckyNum);
console.log(luckyIndex); 

const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];

function studentTemplate(student) {
  return `<p>${student.first} ${student.last}</p><hr>`;
}

const studentsHtml = students.map(studentTemplate);

document.querySelector("#studentList").innerHTML = studentsHtml.join("");