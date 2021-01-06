// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**

// const { ResourceLoader } = require("jsdom");


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

let num = 15;
num.toString();
console.log(num)


// Write a JavaScript program to convert a string to the number.
const parseIntMe =()=> {
let x = '20'
parseInt(x)
console.log(x)
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean 
  
  const dataType = (dog) => {
      // write a function that takes in a varible and return as it datatype

    return typeof dog;
  }
  
  let birthdayMessage = true
  console.log(dataType (true))

  let string1 = "cats"
  console.log(dataType(string1))
//   // * Null

  let blackhole = null
  console.log(dataType(blackhole))

  console.log(dataType(parseIntMe))

//   // * Undefined
let water 
console.log(dataType(water))

//   // * Number
let height = 5
let weight = 2

console.log(dataType(height))
console.log(dataType(weight))



// * NaN
function myX(k) {
  if (isNaN(k)) {
    return NaN;
  }
  return k;
}
console.log(myX('NotANumber'))

//   // * String
let str = "Hello";
let str2 = 'Single quotes are ok too';
let str3= `hello from ${str2}`;
console.log (str3)

  
// // Write a JavaScript program that adds 2 numbers together.

let num1= 5;
let num2 = 5;

const sumNum= num1+ num2
console.log(sumNum)
// Write a JavaScript program that runs only when 2 things are true.
const textNum =(a) => {
  if (a > 0 && a < 10) {
    return true;
  }
  else {
    return false;
  }
}

console.log(textNum(11));


// Write a JavaScript program that runs when 1 of 2 things are true.
const textNum1 =(a) => {
  if (a > 0 || a < 10) {
    return true;
  }
  else {
    return false;
  }
}

console.log(textNum(9));


// Write a JavaScript program that runs when both things are not true.  
const textNum2 =(a) => {
  if (a > 0 && a < 10) {
    return true;
  }
  else {
    return false;
  }
}

console.log(textNum(-3));

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24

// Meng - DateAndTime
// body: link to get your code ( github, repit, paste code)
// all assignments are one week from the day that got assigned to 
