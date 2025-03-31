// Prints Hello world
console.log("Hello, World!");

let myNumber = 4;
let myString = "Variables are great";
let myBoolean = false;

// console.log(myNumber);

// console.log(myString);

// console.log(myBoolean);

let test = {
  myNumber: 4,
  myBoolean: false,
  myString: "Variables are great",
};

// console.log(test.myString)

let myArray = [1, "Sing", true];
myArray[0] = "Bloddy hell";
// console.log(myArray[0]);

let sameArray = new Array(1, "sing", true);
sameArray[3] = "gold";

// To check the number of items in an array
// console.log(sameArray.length);
// console.log(sameArray[3]);

// let myCall = [];
// myCall[10] = false;
// console.log(myCall[10]);
// console.log(myCall.length);

// Create a Multi-Dimensional Area of three steps
//What this means is that yoou should create an array, then inside of the array create another array and another array inside of it.

let call = [[[]]];

let multi$1 = [
  1,
  test,
  [
    "hello",
    2,
    false,
    [1, 2, ["longs", [false]], { favColors: [1, 3, ["print me"]] }],
  ],
  null,
  "come",
];

// console.log(multi$1[2][3][3].favColors[2][0]);

let complexArray = [
  42,
  "example",
  [
    true,
    false,
    [null, "deep", ["even deeper", [undefined, { key: ["find me"] }]]],
  ],
  {
    data: [
      "start",
      {
        nested: [
          "keep going",
          { final: ["almost", { target: "you got it!" }] },
        ],
      },
    ],
  },
  [
    [
      [
        "very",
        [
          "deep",
          [3.14, ["levels", { mystery: ["last", ["hidden", ["treasure"]]] }]],
        ],
      ],
    ],
  ],
];

// console.log(complexArray[4][0][0][1][1][1][1].mystery[1][1][0]);
// console.log(complexArray[3].data[1].nested[1].final[1].target);

let simpArray = [];
// console.log(simpArray);

//OBJECT is a non-primitive or complex datatype there're of two types, Object literals and Arrays
// Array is a list of items also known as members, It's syntax for creation is the squre bracket "[]"

let todo$ = ["Buy Clothes", "Get a haircut", "Shower", 4, 5, 6, 7, "Bathe"];
let babe = todo$.slice(2, -3);
// console.log(babe)

let todo$1 = new Array("Buy Laptop", 13, false);

let todo$2 = "clean, eat, run".split(" ");

// console.log(todo$2)

let firsttodo = todo$[0];
// console.log(firsttodo);

let arr1 = [1, 3, 5, 7, 9, 11, 13];
// arr1.push("goat")

let firstItem = arr1[0];
let secondItem = arr1[1];
let thirdItem = arr1[2];
let fourthItem = arr1[3];
let fifthItem = arr1[4];
let sixthItem = arr1[5];
let seventhItem = arr1[6];

// console.log(
//   firstItem,
//   secondItem,
//   thirdItem,
//   fourthItem,
//   fifthItem,
//   sixthItem,
//   seventhItem
// );
// console.log(arr1 instanceof Array);
// console.log(arr1.length - 1);
// console.log(arr1.pop());

let stack2 = [1, 2, (3)[(1, 2, 7)]];
// console.log()

let score = 20;
let deduct = 2;
score -= deduct;
// console.log("Final value:", score);

// let a = 5;
// let b = 4;

// a+=b-c;
// a-=b*c;
// a*=b%c;=0eb0=b
// a/=b
// // a**=c
// console.log(`initial Values: a = ${a}, b = ${b}`);
// console.log(a++ * b--); //returns 20 because the increments happen after the operation
// console.log(`First operation: a = ${a}, b = ${b}`);
// console.log(a * b);
// console.log(`Second operation: a = ${a}, b = ${b}`);
// console.log(++a * --b);
// console.log(`Third operation: a = ${a}, b = ${b}`);

// Comparison Operators, and it's output is boolean

// let d = 5;
// let e = 20;
let f = 2;
let g = "5";
let h = 0;

// console.log(d===g);

// let a = 10;
// let b = 5;
let c = 10;
let d = 15;
let e = 11;

//console.log(a++ == e);

// Manipulating Arrays
//Pushing items into an array
let myStack = [];
myStack.push(1);
myStack.push(2);
myStack.push(3);
//console.log(myStack);

//Popping items from an array
let popped = myStack.pop();
//console.log(popped);//Result: 3
//console.log(myStack);//what myStack looks like after popping the last item  [1, 2]

//Shift and Unshift
let myQueue = [];
myQueue.unshift(1);
myQueue.unshift(2);
myQueue.unshift(3);
// console.log(myQueue);

// console.log(myQueue.shift()); //Result: 3

// console.log(myQueue.shift()); //Result: 2

// console.log(myQueue.shift()); //Result: 1

//unshift() is used to insert a variable at the beginning of an array

let myQueue1 = [];
myQueue1.unshift(1);
// console.log(myQueue1);

//Write a program that takes a number and prints the  square-root of the number
let a = 81;
let sqrt = a ** 0.5;
// console.log(sqrt);

//Write a program that takes a number and prints the square of the number
let b = 3;
let sqr = b * b;
// console.log(sqrt);

//STRING OPERATORS
//Concatenation +
// console.log("Hello" + "," + " World!");
let name = "Diamonaz";
// console.log("Good morning! " + name);
let school = "The Software Developer";
let greeting = "Good morning, " + name;
let tlgreeting = `Good moring, ${name} ${school}`;
// console.log("String Concatenation: ", greeting);
// console.log("Template Literals: ", tlgreeting);

//Less than Operator <
//first checks the length of he participating operands, secondly the ASCII values of the operands
// console.log("apples" < "banana");

let age = 40;
// console.log("5" < age);

// console.log("z" < "aaa");

//Different behaviours of operators
//minus anomaly (-)
// console.log(4 - "2"); //returns 2
// console.log("4" + "2"); //returns 42
// console.log("42" - 2);
// console.log(2 + 4 + "5");
// console.log(true === "true");
// console.log("apple" === new String("apple"));
// console.log(typeof "apple", typeof new String("apple"));

//Conditionals
//IF and ElSE
// let mark = 80;
// if (mark >= 70) {
//   let result = "A";
//   console.log(`You passed! your grade is ${result}`);
// } else {
//   let result = "D";
//   console.log(`You have failed, your grade is ${result}`);
// }

//ELSE-IF STATEMENTS
// let mark = 90;
// if (mark >= 70) {
//   let result = "A";
//   console.log(`You Aced! your grade is ${result}`);
// } else if (mark >= 60) {
//   let result = "B";
//   console.log(`You have passed! your grade is ${result}`);
// } else if (mark >= 50) {
//   let result = "C";
//   console.log(`You have passed! your grade is ${result}`);
// } else if (mark >= 40) {
//   let result = "D";
//   console.log(`You have passed! your grade is ${result}`);
// } else {
//   let result = "F";
//   console.log(`AHH NAWA FOR YOU BRUHH SEE YOUR SCORE ${result}`);
// }

let mark = 57;
let grade;

if (mark >= 70 && mark <= 100) {
  grade = "A";
} else if (mark >= 60 && mark <= 69) {
  grade = "B";
} else if (mark >= 50 && mark <= 59) {
  grade = "C";
} else if (mark >= 40 && mark <= 49) {
  grade = "D";
} else if (mark >= 0 && mark <= 39) {
  grade = "F";
} else {
  grade = "Next year it is then ;)";
}
// console.log(grade);

//Using Conditionals with string
let nAme = "DIAMONDS";

if (nAme == "DIAMONDS") {
  // console.log("Welcome back!");
} else {
  // console.log("Who are you?");
}

//SWITCH statements
let target = 100;
let game;
switch (true) {
  case target >= 70 && target <= 100:
    game = "A";
    break;
  case target >= 60 && target <= 69:
    game = "B";
    break;
  case target >= 50 && target <= 59:
    game = "C";
    break;
  case target >= 40 && target <= 49:
    game = "D";
    break;
  case target >= 30 && target <= 39:
    game = "E";
    break;
  case target >= 0 && target <= 29:
    game = "F";
    break;
  default:
    game = "Denied!";
    break;
}

console.log(game);

//FOR LOOPS

//DESCENDING ORDERED LOOPS
for (let i = 10; i > 0; i--) {
  //console.log(i);
}

//ASCENDING ORDERED LOOPS
let evenArray = [];
for (let j = 0; j <= 10; j += 2) {
  //console.log(j);
  evenArray.push(j);
  //console.log(evenArray);
}

//WITHOUT A LOGIC THE "FOR" PROGRAM RUNS INFINITELY

//Write an program that outputs even and odd numbers in an array
//TASK

//WHILE LOOPS
let counter = 1;
while (counter <= 3) {
  //console.log("heyy!");
  counter++;
}

//TASK ONE

//We have an array of numbers
//we will iterate through the array and sum all the numbers

let array = [2, 6, 8, 9, 12, 98, 11];
let result = 0;
//An Array of 7 elements, having indexes of 0 - 6
//to print the values of the array without hardcoding the values is importance
for (
  let i = 0;
  i <= array.length - 1;
  i++ //for (let i = 0; i < array.length; i++)
) {
  //prints the index of the Array
  //console.log(i);
  //Prints the values of variables stored in the array
  //console.log(`The Value of i is ${i} and the array value is ${array[i]}`);

  //console.log(`The initial value of result is ${result}`);
  result += array[i];
  //console.log(result);

  //console.log(`The final value of result is ${result}`);
}

//TASK TWO

//Using an Interger say a whole number
// We will print all the even and odd numbers from 1 - 100

let number = 100;
let oddArr = [];
let evenArr = [];
for (let j = 1; j <= number; j++) {
  //console.log(j);

  //console.log(evenArray);
  if (j % 2 == 0) {
    //console.log(`the value ${j} is an even number`);
    evenArr.push(j);
  } else {
    //console.log(`The number ${j} is an Odd number`);
    oddArr.push(j);
  }
}
console.log(evenArr);
console.log(oddArr);

//Write a program that Multiplies the Array members by 3 and outputs the result in another array
let oldArr = [2, 4, 6, 8, 10, 12];
let newArr = [];
for (i = 0; i < oldArr.length; i++) {
  oldArr[i] *= 3;
  newArr.push(oldArr[i]);
  //console.log(oldArr[i] * 3);
}
console.log(newArr);

//Make a program to calculate 10! FACTORIA
let factorial = 1;
let num = 5;
for (let i = 1; i <= num; i++) {
  factorial *= i;
  //console.log(factorial);
}
console.log(`The factorial of ${num} is ${factorial}`);

//FIBBIONACHI SEQUENCE
//FOR LOOP
let v = 20;

let fibArr = [];
for (q = 0; q < v + 1; q++) {
  if (q == 0) {
    fibArr.push(0);
  } else if (q == 1) {
    fibArr.push(1);
  } else {
    fibArr.push(fibArr[q - 1] + fibArr[q - 2]);
  }
}
console.log(`Here's your Fibonacchi Sequence: ${fibArr}`);

//WHILE LOOP
let y = 20;
let n = 0;
let fibArr1 = [];

while (n <= y) {
  if ( n == 0) {
    fibArr1.push(0);
  } else if (n == 1) {
    fibArr1.push(1);
  } else {
    fibArr1.push(fibArr1[n - 1] + fibArr1[n - 2]);
  }
  n++;
}
console.log(`Here's your Fibonacchi Sequence: ${fibArr1}`);
