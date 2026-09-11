// Q1)

function makeCounter(startFrom, incrementBy) {
  let currentCount = startFrom;
  return function () {
    currentCount += incrementBy;
    console.log(currentCount);
    return currentCount;
  };
}
let counter1 = makeCounter(0, 1);
counter1(); // 1
counter1(); // 2
// Q1.a)
let counter2 = makeCounter(3, 3);
counter2();
counter2();
// Q1.b) Edited above.
// Q1.c) Edited above.

// Q2)

const delayMsg = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
};
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg("#4: Not delayed at all");
// Q2.a)
// Print order: #4, #3, #2, #1.
// Why: #4 has no time out set and prints without delay. #3 has a delay of 0ms and prints after items without timeouts. #1, #2, #3 print in order of specified delay, shortest delay prints first.
// Q2.b) Edited above.
// Q2.c)
const canceled = setTimeout(delayMsg, 11000, "#5: Delayed by 11000ms");
// Q2.d)
clearTimeout(canceled);

// Q3)

function printMe(msg) {
  console.log("printing debounced message: " + msg);
}
printMe = debounce(printMe, 500); //create this debounce function for a)

//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 
//1000ms of no calls
setTimeout(printMe, 100, "first call");
setTimeout(printMe, 200, "second call");
setTimeout(printMe, 300, "third call");
// Q3.a)
function debounce(funcId, ms = 1000) {
    let timerId;
    return function (funcValue) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            funcId(funcValue);
        }, ms);
    }
}
// Q3.b) Edited above.
// Q3.c) Edited above.

// Q4)

// Q4.a)
function printFibonacci(a = 1, b = a, limit = 10) {
    let count = 0;
    const timerId = setInterval(() => {
        console.log(a);
        const sum = a + b;
        a = b;
        b = sum;
        count++
        if (count == limit) {
            clearInterval(timerId)
        }
    }, 1000);
    return timerId
}
printFibonacci()
// Q4.b)
function printFibonacciTimeouts(a = 1, b = a, limit = 10) {
    let count = 1;
    const delay = 1000
    setTimeout(function repeatThis() {
        console.log(a);
        const sum = a + b;
        a = b;
        b = sum;
      if (count < limit) setTimeout(repeatThis, delay, count++)
    })
    }

printFibonacciTimeouts()
// Q4.c) Edited above.

// Q5)

let car = {
make: "Porsche",
model: '911',
year: 1964,
description() {
console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
}
};
car.description(); //works
setTimeout( () => car.description(), 200); //fails
// Q5.a) Edited above.
// Q5.b)
const carClone = car;
carClone.year = 2000;
// Q5.c)
// The delayed description call uses the carClone year as the carClone script runs before the delay and both car and carClone have the same reference.
// Q5.d)
const carBound = car.description.bind(car)
setTimeout(carBound, 500);
// Q5.e)
const carClone1 = car;
carClone1.model = 'Boxster';
// The carClone1 updates the carBound setTimeout as well as the car setTimeout.

// Q6)

function multiply(a, b, c, d) {
console.log( a * b * c * d );
}
Function.prototype.delay = function(ms) {
    return function(...args) {
        setTimeout(() => {
            multiply.apply(this, args);
        }, ms);
    };
};
multiply.delay(500)(5, 5, 5, 5); // prints 25 after 500 milliseconds
// Q6.a)
multiply.delay(1000)(5, 2, 1, 1);
// Q6.b) Edited  above.
// Q6.c) Edited  above.

// Q7)

class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }
  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}
const myClock = new DigitalClock("my clock:");
// myClock.start();
// Q7.a)
class PrecisionClock extends DigitalClock {
    precision(ms = 1000) {
        this.timer = setInterval(() => this.display(), ms)
    }

}
const myPreciseClock = new PrecisionClock("my precise clock:");
// myPreciseClock.precision();
// Q7.b)
class AlarmClock extends DigitalClock {
  wakeupTime(alarmTime = "07:00") {
    const [hours, minutes] = alarmTime.split(":");
    const alarm = new Date();
    const now = new Date();
    alarm.setHours(hours, minutes, 0, 0);
    if (alarm < now) {
      alarm.setDate(alarm.getDate() + 1);
    }
    this.timer = setInterval(() => {
      this.display();
      const current = new Date();
      if (current.getTime() >= alarm.getTime()) {
        console.log("Wake Up");
        this.stop();
      }
    }, 1000);
  }
}
const myAlarmClock = new AlarmClock("my alarm clock:");
myAlarmClock.wakeupTime();

// Q8)

function orderItems(...itemName) {
return `Order placed for: ${itemName.join(', ')}`;
}
// Q8.a)
function validateStringArg(fn) {
  return function (...itemName) {
    try {
      for (item of itemName) {
        if (typeof item !== "string") {
          throw new Error("!NOT STRING!");
        }
      }
      return fn(...itemName);
    } catch (err) {
      if (err instanceof Error) {
        return "!ERROR! " + err.message;
      } else {
        throw err;
      }
    }
  };
}
// create a decorated version of the original function
const validatedOrderItem = validateStringArg(orderItems);
console.log(validatedOrderItem("Apple Watch")); // should run the function
console.log(validatedOrderItem(123)); // should throw an error
// Q8.b) Edited above.
console.log(validatedOrderItem("Apple Watch", "Iphone"));// not tacking more arguments
// Q8.c) Edited above.
// Q8.d) Edited above.
console.log(validatedOrderItem(false, "Iphone"));

// Q9)

function randomDelay() {
  // your code
  function getRandomInt(min, max) {
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
  }
  const RandomNum = getRandomInt(1000, 20000);

  const promise = new Promise((resolve, reject) => {
    if (RandomNum % 2 == 0) setTimeout(() => resolve('Even number'), RandomNum);
    else setTimeout(() => reject('Even number'), RandomNum);
  });
  return promise
    .then((result) => console.log(`${result} !SUCCES! delay of: ${RandomNum}ms`))
    .catch((error) => console.log(`${error} !FAIL! delay of: ${RandomNum}ms`));
}
randomDelay().then(() => console.log("There appears to have been a delay."));
// Q9.a) Edited above.
// Q9.b) Edited above.
// Q9.c) Edited above.

// Q10)

// run 'npm init' and accept all the defaults
// run 'npm install node-fetch'
// run 'npm pkg set type=module'
import fetch from "node-fetch";
globalThis.fetch = fetch;

function fetchURLData(url) {
  let fetchPromise = fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  });
  return fetchPromise;
}
fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));
fetchURLData("https://jsonplaceholder.typicode.com/todos/invalid")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

// Q10.a)
async function asyncFetchURLData(...urls) {
  const fetchPromises = urls.map(async (url) => {
    const response = await fetch(url);
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
    })
    return Promise.all(fetchPromises);
  }
asyncFetchURLData("https://jsonplaceholder.typicode.com/todos/1", "https://jsonplaceholder.typicode.com/todos/2")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));
asyncFetchURLData("https://jsonplaceholder.typicode.com/todos/invalid", "https://jsonplaceholder.typicode.com/todos/2")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));