// Q1)
console.log('--Q1 Start--\n')

function ucFirstLetters(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}
console.log(ucFirstLetters("los angeles") ) //Los Angeles

console.log('\n--Q1 End--')
// Q2)
console.log('--Q2 Start--\n')

function truncate(str, max) {
    if (str.length > max) {
        return str.slice(0, max) + '...';
    }
    else {
        return str
    }
}
console.log(truncate('This text will be truncated if it is too long', 25))
// This text will be truncat...
console.log(truncate('This text will be truncated if it is too long', 45))

console.log('\n--Q2 End--')
// Q3)
console.log('--Q3 Start--\n')

const animals = ['Tiger', 'Giraffe']
console.log(animals)
// Q3.a
animals.push('Gorrila', 'Wolf')
console.log(animals)
// Q3.b
animals.unshift('Sloth', 'Elephant')
console.log(animals)
// Q3.c
//To sort alphabeticaly disregarding case sensitivity.
animals.sort((a, b) => {
    const A = a.toUpperCase()
    const B = b.toUpperCase()
    if (A > B) return 1;
    if (A < B) return -1;
    return 0;
})
console.log(animals)
// Q3.d
function replaceMiddleAnimal(newValue) {
    const half = Math.ceil(animals.length / 2 - 1);
    return animals.splice(half, 1, newValue)
}
replaceMiddleAnimal('Snake')
console.log(animals)
// Q3.e
function findMatchingAnimals(beginsWith) {
    const Upper = beginsWith.toUpperCase()
    return animals.filter(animal => animal.toUpperCase().startsWith(Upper))
}
console.log(findMatchingAnimals('s'))

console.log('\n--Q3 End--')
// Q4)
console.log('--Q4 Start--\n')

function camelCase(cssProp) {
    const standardize = cssProp.toLowerCase().replaceAll('-',' ')
    const capitalize = ucFirstLetters(standardize)
    const formated = capitalize.charAt(0).toLowerCase() + capitalize.slice(1)
    return formated.replaceAll(' ','')
}
console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display
// Q4.b.1)
function camelCase1(cssProp){
    const parts = cssProp.toLowerCase().split('-');
    let result = parts[0];
    for (let i = 1; i < parts.length; i++) {
        result += parts[i].charAt(0).toUpperCase() + parts[i].slice(1)
    }
    return result
}
console.log(camelCase1('margin-left')) // marginLeft
console.log(camelCase1('background-image')) // backgroundImage
console.log(camelCase1('display')) // display
// Q4.b.2)
function camelCase2(cssProp) {
    const parts = cssProp.toLowerCase().split('-');
    let result = parts
    for (const index in parts) {
        const part = parts[index]
        index <= 0 ? result = part : result += part.charAt(0).toUpperCase() + part.slice(1);
    }
    return result
}
console.log(camelCase2('margin-left')) // marginLeft
console.log(camelCase2('background-image')) // backgroundImage
console.log(camelCase2('display')) // display
// Q4.b.3)
function camelCase3(cssProp) {
    const parts = cssProp.toLowerCase().split('-');
    let result = parts
    let first = true
    for (const part of parts) {
        if (first) {
            result = part;
            first = false;
        }
        else {
            result += part.charAt(0).toUpperCase() + part.slice(1)
        }
    }
    return result
}
console.log(camelCase3('margin-left')) // marginLeft
console.log(camelCase3('background-image')) // backgroundImage
console.log(camelCase3('display')) // display

console.log('\n--Q4 End--')
// Q5)
console.log('--Q5 Start--\n')

let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`) 
// 0.2 + 0.1 = 0.30000000000000004
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) //why is this not working?
// Q5.a)
// the toFixed method converts the number to a string. adding the fixed  numbers together concatentates rather than adds.
console.log(typeof fixedTwenty)
console.log(typeof fixedTen)
// Q5.b)
function currencyAddition(float1, float2) {
    const toCents = Math.round(float1 * 100) + Math.round(float2 * 100);
    const result = toCents / 100;
    return result
}
// Math.round added to remove any inconsistancies with the floating number math.
console.log(currencyAddition(twentyCents, tenCents))
console.log('Testing:\t' + (0.3 == currencyAddition(twentyCents, tenCents)))
// Q5.c)
function caurrencyOperation (float1, float2, operation) {
    switch (operation) {
        case '+':
            return (Math.round(float1 * 100) + Math.round(float2 * 100)) / 100;
        case '-':
            return (Math.round(float1 * 100) - Math.round(float2 * 100)) / 100;
        case '*':
            return parseFloat((float1 * float2).toFixed(2));
        case '/':
            return parseFloat((float1 / float2).toFixed(2));
        default:
            return "!!ERROR!! use one of the following operations: '+', '-', '*', '/'."
    }
}
console.log(caurrencyOperation (twentyCents, tenCents, '+'))
console.log(caurrencyOperation (twentyCents, tenCents, '-'))
console.log(caurrencyOperation (twentyCents, tenCents, '*'))
console.log(caurrencyOperation (twentyCents, tenCents, '/'))
console.log(caurrencyOperation (twentyCents, tenCents, ' '))
console.log('testing:\t' + (0.3 == caurrencyOperation (0.2, 0.1, '+')))
// Q5.d)
function caurrencyOperation1(float1, float2, operation, numDecimals) {
  if (numDecimals <= 10) {
    switch (operation) {
      case "+":
        return parseFloat((float1 + float2).toFixed(numDecimals));
      case "-":
        return parseFloat((float1 - float2).toFixed(numDecimals));
      case "*":
        return parseFloat((float1 * float2).toFixed(numDecimals));
      case "/":
        return parseFloat((float1 / float2).toFixed(numDecimals));
      default:
        return "!!ERROR!! use one of the following operations: '+', '-', '*', '/'.";
    }
  } else {
    return "Decimal to be max of 10";
  }
}
console.log(caurrencyOperation1 (twentyCents, tenCents, '+', 10))
console.log(caurrencyOperation1 (twentyCents, tenCents, '-', 10))
console.log(caurrencyOperation1 (twentyCents, tenCents, '*', 10))
console.log(caurrencyOperation1 (twentyCents, tenCents, '/', 10))
console.log(caurrencyOperation1 (twentyCents, tenCents, ' ', 10))
console.log(caurrencyOperation1 (twentyCents, tenCents, ' ', 18))
console.log('testing:\t' + (0.3 ==caurrencyOperation1 (0.20, 0.10, '+', 2)))

console.log('\n--Q5 End--')
// Q6)
console.log('--Q6 Start--\n')

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
const myArray = ['sun', 25, 'rain', 10, 'sun', 20, 'snow', -1, 'rain', 25]
//formating function.
function unique(duplicatesArray) {
  return [... new Set(duplicatesArray)]
}
console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]
console.log(unique(myArray))

console.log('\n--Q6 End--')
// Q7)
console.log('--Q7 Start--\n')

const books = [
{ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
{ id: 3, title: '1984', author: 'George Orwell', year: 1949 },
{ id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
{ id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];
// Q7.a)
function getBookTitle(bookId) {
  const book = books.find(book => book.id == bookId)
  return book.title
}
console.log(getBookTitle(2))
console.log(getBookTitle(4))
// Q7.b)
function getOldBooks() {
  return books.filter(book => book.year < 1950)
}
console.log(getOldBooks())
// Q7.c)
function addGenre() {
  return books.map(book => ({...book, genre: 'classic'}));
}
console.log(addGenre(books))
// Q7.d)
function getTitles(authorInitial) {
  const standardize = authorInitial.toUpperCase();
  const filter = books.filter(book => book.author.toUpperCase().startsWith(standardize));
  return filter.map(book => book.title);
}
console.log(getTitles('A'))
console.log(getTitles('h'))
// Q7.e)
function latestBook() {
  let latest = books[0];
  books.forEach(() => {
    const newerBook = books.find(book => book.year > latest.year);
    if (newerBook) {
      latest = newerBook
    }
  });
  return latest
}
console.log(latestBook())

console.log('\n--Q7 End--')
// Q8)
console.log('--Q8 Start--\n')

const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343') 
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')
console.log(phoneBookABC)
// Q8.a)
const phoneBookDEF = new Map()
// Q8.b)
phoneBookDEF.set('Dave', '0422882597')
phoneBookDEF.set('Elizabeth', '0224789653')
phoneBookDEF.set('Frank', '0439875167')
console.log(phoneBookDEF)
// Q8.c)
phoneBookABC.set('Caroline', '0224862179')
console.log(phoneBookABC)
// Q8.d)
function printPhoneBook(contacts) {
  for (const [name, phone] of contacts) {
    console.log(`${name}: ${phone}`)
  }
}
printPhoneBook(phoneBookDEF)
// Q8.e)
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);
// Q8.f)
printPhoneBook(phoneBook)

console.log('\n--Q8 End--')
// Q9)
console.log('--Q9 Start--\n')

let salaries = {
"Timothy" : 35000,
"David" : 25000,
"Mary" : 55000,
"Christina" : 75000,
"James" : 43000
};
// Q9.a)
function sumSalaries(salaries) {
  let total = 0;
  for (const salary of Object.values(salaries)) {
    total += salary;
  }
  return total;
}
console.log(sumSalaries(salaries))
// Q9.b)
function topEarner(salaries) {
  let highestSalary = 0;
  let highestEarner = undefined;
  for (const [name, salary] of Object.entries(salaries)) {
    if (salary > highestSalary) {
      highestSalary = salary
      highestEarner = name
    }
  }
  return highestEarner;
}
console.log(topEarner(salaries))

console.log('\n--Q9 End--')
// Q10)
console.log('--Q10 Start--\n')

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')
// Q10.a)
console.log(today.getHours() + ' hours ' + today.getMinutes() + ' minutes have passed so far today')
console.log((today.getHours() * 60) + today.getMinutes() + ' total minutes have passed so far today')
// Q10.b)
console.log(today.getHours() + ' hours ' + today.getMinutes() + ' minutes ' + today.getSeconds() + ' secounds have passed so far today')
console.log((((today.getHours() * 60) + today.getMinutes()) * 60) + today.getSeconds() + ' total secounds have passed so far today')
//Q10.c)
const birthDate = new Date('1995-03-30')

function getAge() {
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();
  if (days < 0) {
    months--;
    const priorMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += priorMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  return {years, months, days};
}
const {years, months, days} = getAge()
console.log(`I am ${years} years, ${months} months and ${days} days old`)
// Q10.d)
function daysInBetween(date1, date2) {
  const msPerDay = 1000 * 60 * 60 * 24;
  const dateA = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const dateB = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
  const result = Math.abs((dateA - dateB) / msPerDay);
  return result
}
console.log(daysInBetween(today, birthDate))