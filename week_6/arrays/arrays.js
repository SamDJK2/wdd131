//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`; //the html string made from step
}
const stepsHtml = steps.map(listTemplate) // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join("")// set the innerHTML

const letters = ["A", "B", "A"];
const initial_gpa = 0;
function gpa_calc(letter){
    if (letter === "A"||"B"||"C"||"D"||"F"){
        const letter_key = {"A": 4,"B": 3,"C": 2,"D": 1,"F": 0};
        return letter_key[letter];
    }else{
        return 0;
    }
}
const gpaPoints = letters.map(gpa_calc);
const gpaTotal = gpaPoints.reduce(((total, current_gpa) => total + current_gpa)/gpaPoints.length);

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape']
const shortFruits = fruits.filter((fruit) => fruit.length < 6)

const nums = [12, 34, 21, 54]
const luckyNum = 21
let luckyIndex = nums.indexOf(luckyNum)