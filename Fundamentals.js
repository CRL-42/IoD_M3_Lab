// Q1)
console.log("--Start Q1--");

"" + 1 + 0; // = 10
console.log("" + 1 + 0); //correct
"" - 1 + 0; // = -1
console.log("" - 1 + 0); //correct
true + false; // = truefalse
console.log(true + false); //incorrect = 1
!true; // = false
console.log(!true); //correct
6 / "3"; // = 2
console.log(6 / "3"); //correct
"2" * "3"; // = 6
console.log("2" * "3"); //correct
4 + 5 + "px"; // = 9px
console.log(4 + 5 + "px"); //correct
"$" + 4 + 5; // = $45
console.log("$" + 4 + 5); //correct
"4" - 2; // = 2
console.log("4" - 2); //correct
"4px" - 2; // = 2px
console.log("4px" - 2); //incorect = NaN
" -9 " + 5; // = -95
console.log(" -9 " + 5); //incorrect = -9 5
" -9 " - 5; // = -4
console.log(" -9 " - 5); //incorrect = -14
null + 1; // = 1
console.log(null + 1); //correct
undefined + 1; // = NaN
console.log(undefined + 1); //correct
undefined == null; // = true
console.log(undefined == null); //correct
undefined === null; // = false
console.log(undefined === null); //correct
" \t \n" - 2; // = undefined
console.log(" \t \n" - 2); //incorrect = -2

console.log("--END Q1--");
// Q2)
console.log("--Start Q2--");

let three = "3";
let four = "4";
let thirty = "30";
//what is the value of the following expressions?

let addition = three + four; //incorrect - output "34"
console.log(addition);
console.log(3 + 4);
let multiplication = three * four; //correct - output 12
console.log(multiplication);
console.log(3 * 4);
let division = three / four; // correct - output 0.75
console.log(division);
console.log(3 / 4);
let subtraction = three - four; // correct - output -1
console.log(subtraction);
console.log(3 - 4);
let lessThan1 = three < four; // correct - output true
console.log(lessThan1);
console.log(3 < 4);
let lessThan2 = thirty < four; // incorect - output true
console.log(lessThan2);
console.log(30 < 4);
// the incorect answeres are because the number values stored in the variable are strings, if set as numbers e.g. 3, 4, 30, the math would be correct.

console.log("--END Q2--");
// Q3)
console.log("--Start Q3--");

if (0) console.log("#1 zero is true"); //Print fails. 0 returns false as has zero value.
if ("0") console.log("#2 zero is true"); //Print succeeds. String "0" returns true as the string has a value.
if (null) console.log("null is true"); //Print fails. null returns false as has no value.
if (-1) console.log("negative is true"); //Print succeeds. -1 returns true as has a value of -1.
if (1) console.log("positive is true"); //Prints succeeds. 1 returns true as has a value of 1.
// The console.log comand runs when the if statment is true.

console.log("--END Q3--");
// Q4)
console.log("--Start Q4--");

let a = 2,
  b = 3;
((a = 3), (b = 7));
((a = 5), (b = 9));
((a = -5), (b = 14));
let result = `${a} + ${b} is `;
a + b < 10 ? (result += "less than 10") : (result += "greater than 10");
console.log(result);
// the += concatenates the values on the left and right together.

console.log("--END Q4--");
// Q5)
console.log("--Start Q5--");

function getGreeting(name) {
  return "Hello " + name + "!";
}
console.log(getGreeting("John Doe"));

const greeting = function (name) {
  return "Hello " + name + "!";
};
console.log(greeting("Jane Doe"));

const greetingArrow = (name) => {
  return "Hello " + name + "!";
};
console.log(greetingArrow("Sayan"));

console.log("--END Q5--");
// Q6)
console.log("--Start Q6--");

const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo", lastName: "Montoya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName + ' ' + this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase(person) {
    if numFingers == 6:
    return "You killed my father. Prepare to die"
    else
    return "Nice to meet you.";
  },
};
inigo.greeting(westley);
inigo.greeting(rugen);
