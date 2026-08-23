// Q1)
console.log("--Start Q1--\n");

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

console.log("\n--END Q1--");
// Q2)
console.log("--Start Q2--\n");

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

console.log("\n--END Q2--");
// Q3)
console.log("--Start Q3--\n");

if (0) console.log("#1 zero is true"); //Print fails. 0 returns false as has zero value.
if ("0") console.log("#2 zero is true"); //Print succeeds. String "0" returns true as the string has a value.
if (null) console.log("null is true"); //Print fails. null returns false as has no value.
if (-1) console.log("negative is true"); //Print succeeds. -1 returns true as has a value of -1.
if (1) console.log("positive is true"); //Prints succeeds. 1 returns true as has a value of 1.
// The console.log comand runs when the if statment is true.

console.log("\n--END Q3--");
// Q4)
console.log("--Start Q4--\n");

let a = 2,
  b = 3;
((a = 3), (b = 7));
((a = 5), (b = 9));
((a = -5), (b = 14));
let result = `${a} + ${b} is `;
a + b < 10 ? (result += "less than 10") : (result += "greater than 10");
console.log(result);
// the += concatenates the values on the left and right together.

console.log("\n--END Q4--");
// Q5)
console.log("--Start Q5--\n");

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

console.log("\n--END Q5--");
// Q6)
console.log("--Start Q6--\n");

const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  lastName: "Montoya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName + " " + this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase: (person) =>
    person.numFingers === 6
      ? "You killed my father. Prepare to die."
      : "Nice to meet you.",
};
inigo.greeting(westley);
inigo.greeting(rugen);

console.log("\n--END Q6--");
// Q7)
console.log("--Start Q7--\n");

const basketballGame = {
  score: 0,
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  fouls: 0,
  foul() {
    this.fouls++;
    return this;
  },
    halfTime() {
    console.log("Halftime score is " + this.score);
    console.log("Halftime fouls " + this.fouls);
    return this;
  },
  fullTime() {
    console.log("Final score is " + this.score);
    console.log("Final fouls " + this.fouls)
  }
};
//modify each of the above object methods to enable function chaining as below:
console.log('-Basketball Game 1')
const basketballGame1 = {...basketballGame};
basketballGame1.basket().freeThrow().foul().freeThrow().basket().threePointer().halfTime().freeThrow().foul().basket().fullTime();
console.log('-Basketball Game 2')
const basketballGame2 = {...basketballGame};
basketballGame2.threePointer().basket().foul().freeThrow().halfTime().threePointer().threePointer().foul().basket().freeThrow().foul().freeThrow().foul().freeThrow().fullTime();

console.log("\n--END Q7--");
// Q8)
console.log("--Start Q8--\n");

const sydney = {
name: 'Sydney',
population: 5_121_000,
state: 'NSW',
founded: '26 January 1788',
timezone: 'Australia/Sydney'
}

getCity(sydney)

function getCity(city) {
  for (let key in city) {
    console.log(key + ': ' + city[key])
  }
}

const auckland = {
name: 'Auckland',
population: 1_816_000,
Region: 'AKL',
founded: '18 September 1840',
timezone: 'New Zealand'
}

getCity(auckland)

console.log("\n--END Q8--");
// Q9)
console.log("--Start Q9--\n");

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

// let moreSports = teamSports;
let moreSports = [...teamSports]
moreSports.push('Football', 'Rugby')
moreSports.unshift('Netball', 'Basketball')

let dog2 = dog1
dog2 = 'Spring'

// let cat2 = cat1
let cat2 = {...cat1}
cat2.name = 'Gizmo'

console.log('teamSports:', teamSports)
console.log('moreSports:', moreSports)
console.log('dog1:', dog1)
console.log('dog2:', dog2)
console.log('cat1:', cat1)
console.log('cat2:', cat2)

/*
d)
teamSports added values to the front and back of its list. 
dog1 has not changed.
cat1 name changed.
teamSports and cat1 store complex data types which are stored by reference in memory.
Using methods like .name, .push & .unshift change the information stored at the reference point.
dog1 stores a primitive data type and holds a different reference to dog2 so changes made in one dont affect the other.
*/



console.log("\n--END Q9--");
// Q10)
console.log("--Start Q10--\n");

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive = age >= 18;
}

let person1 = new Person('Joffrey Baratheon', 18)
let person2 = new Person('Arya, Stark', 13)

console.log(person1)
console.log(person2)

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = age >= 18;
  }
}

let person3 = new PersonClass('John Snow', 20)

console.log(person3)

console.log("\n--END Q10--");